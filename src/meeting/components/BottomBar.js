import {
  Constants,
  useMeeting,
  usePubSub,
  useMediaDevice,
} from "@videosdk.live/react-sdk";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  ClipboardIcon,
  CheckIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import recordingBlink from "../../static/animations/recording-blink.json";
import useIsRecording from "../../hooks/useIsRecording";
import RecordingIcon from "../../icons/Bottombar/RecordingIcon";
import MicOnIcon from "../../icons/Bottombar/MicOnIcon";
import MicOffIcon from "../../icons/Bottombar/MicOffIcon";
import WebcamOnIcon from "../../icons/Bottombar/WebcamOnIcon";
import WebcamOffIcon from "../../icons/Bottombar/WebcamOffIcon";
import ScreenShareIcon from "../../icons/Bottombar/ScreenShareIcon";
import ChatIcon from "../../icons/Bottombar/ChatIcon";
import ParticipantsIcon from "../../icons/Bottombar/ParticipantsIcon";
import DayIcon from "../../icons/Bottombar/DayIcon";
import EndIcon from "../../icons/Bottombar/EndIcon";
import RaiseHandIcon from "../../icons/Bottombar/RaiseHandIcon";
import PipIcon from "../../icons/Bottombar/PipIcon";
import { OutlinedButton } from "../../components/buttons/OutlinedButton";
import useIsTab from "../../hooks/useIsTab";
import useIsMobile from "../../hooks/useIsMobile";
import { MobileIconButton } from "../../components/buttons/MobileIconButton";
import { sideBarModes } from "../../utils/common";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { createPopper } from "@popperjs/core";
import { useMeetingAppContext } from "../../MeetingAppContextDef";
import useMediaStream from "../../hooks/useMediaStream";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCross,
  faGun,
  faHatCowboy,
  faMoon,
  faPerson,
  faShield,
  faSun,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import { socket } from "../../hooks/socketService";

import { useKillPlayer } from "../../hooks/useKillPlayer";
import { useGetPlayers } from "../../hooks/useGetPlayers";
import { useKickPlayer } from "../../hooks/useKickPlayer";
import { useStartGame } from "../../hooks/useStartGame";
import { useVotePlayer } from "../../hooks/useVotePlayer";
import { useDetectMafia } from "../../hooks/useDetectMafia";
import Cookies from "js-cookie";
import { useGetRole } from "../../hooks/useGetRole";
import { useSendFall } from "../../hooks/useSendFall";
import { useCheckRole } from "../../hooks/useCheckRole";
import { useStartNight } from "../../hooks/useStartNight";
import { useStartDay } from "../../hooks/useStartDay";
import { useWakeUpDon } from "../../hooks/useWakeUpDon";
import { useWakeUpMafia } from "../../hooks/useWakeUpMafia";
import { useWakeUpSheriff } from "../../hooks/useWakeUpSheriff";
import { useDetectSheriff } from "../../hooks/useDetectSheriff";
import { useEndVote } from "../../hooks/useEndVote";
import { useStartVote } from "../../hooks/useStartVote";

function PipBTN({ isMobile, isTab }) {
  const { pipMode, setPipMode } = useMeetingAppContext();

  const getRowCount = (length) => {
    return length > 2 ? 2 : length > 0 ? 1 : 0;
  };
  const getColCount = (length) => {
    return length < 2 ? 1 : length < 5 ? 2 : 3;
  };

  const pipWindowRef = useRef(null);
  const togglePipMode = async () => {
    //Check if PIP Window is active or not
    //If active we will turn it off
    if (pipWindowRef.current) {
      await document.exitPictureInPicture();
      pipWindowRef.current = null;
      return;
    }

    //Check if browser supports PIP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {
      //Creating a Canvas which will render our PIP Stream
      const source = document.createElement("canvas");
      const ctx = source.getContext("2d");

      //Create a Video tag which we will popout for PIP
      const pipVideo = document.createElement("video");
      pipWindowRef.current = pipVideo;
      pipVideo.autoplay = true;

      //Creating stream from canvas which we will play
      const stream = source.captureStream();
      pipVideo.srcObject = stream;
      drawCanvas();

      //When Video is ready we will start PIP mode
      pipVideo.onloadedmetadata = () => {
        pipVideo.requestPictureInPicture();
      };
      await pipVideo.play();

      //When the PIP mode starts, we will start drawing canvas with PIP view
      pipVideo.addEventListener("enterpictureinpicture", (event) => {
        drawCanvas();
        setPipMode(true);
      });

      //When PIP mode exits, we will dispose the track we created earlier
      pipVideo.addEventListener("leavepictureinpicture", (event) => {
        pipWindowRef.current = null;
        setPipMode(false);
        pipVideo.srcObject.getTracks().forEach((track) => track.stop());
      });

      //These will draw all the video elements in to the Canvas
      function drawCanvas() {
        //Getting all the video elements in the document
        const videos = document.querySelectorAll("video");
        try {
          //Perform initial black paint on the canvas
          ctx.fillStyle = "black";
          ctx.fillRect(0, 0, source.width, source.height);

          //Drawing the participant videos on the canvas in the grid format
          const rows = getRowCount(videos.length);
          const columns = getColCount(videos.length);
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
              if (j + i * columns <= videos.length || videos.length === 1) {
                ctx.drawImage(
                  videos[j + i * columns],
                  j < 1 ? 0 : source.width / (columns / j),
                  i < 1 ? 0 : source.height / (rows / i),
                  source.width / columns,
                  source.height / rows
                );
              }
            }
          }
        } catch (error) {
          console.log(error);
        }

        //If pip mode is on, keep drawing the canvas when ever new frame is requested
        if (document.pictureInPictureElement === pipVideo) {
          requestAnimationFrame(drawCanvas);
        }
      }
    } else {
      alert("PIP is not supported by your browser");
    }
  };

  return isMobile || isTab ? (
    <MobileIconButton
      id="pip-btn"
      tooltipTitle={pipMode ? "Stop PiP" : "Start Pip"}
      buttonText={pipMode ? "Stop PiP" : "Start Pip"}
      isFocused={pipMode}
      Icon={PipIcon}
      onClick={() => {
        togglePipMode();
      }}
      disabled={false}
    />
  ) : (
    <OutlinedButton
      Icon={PipIcon}
      onClick={() => {
        togglePipMode();
      }}
      isFocused={pipMode}
      tooltip={pipMode ? "Stop PiP" : "Start Pip"}
      disabled={false}
    />
  );
}

const MicBTN = () => {
  const {
    selectedMic,
    setSelectedMic,
    selectedSpeaker,
    setSelectedSpeaker,
    isMicrophonePermissionAllowed,
  } = useMeetingAppContext();

  const { getMicrophones, getPlaybackDevices } = useMediaDevice();

  const mMeeting = useMeeting();
  const [mics, setMics] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const localMicOn = mMeeting?.localMicOn;
  const changeMic = mMeeting?.changeMic;

  const getMics = async () => {
    const mics = await getMicrophones();
    const speakers = await getPlaybackDevices();

    mics && mics?.length && setMics(mics);
    speakers && speakers?.length && setSpeakers(speakers);
  };

  const [tooltipShow, setTooltipShow] = useState(false);
  const btnRef = useRef();
  const tooltipRef = useRef();

  const openTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "top",
    });
    setTooltipShow(true);
  };

  const closeTooltip = () => {
    setTooltipShow(false);
  };

  return (
    <>
      <OutlinedButton
        Icon={localMicOn ? MicOnIcon : MicOffIcon}
        onClick={() => {
          mMeeting.toggleMic();
        }}
        bgColor={localMicOn ? "bg-gray-750" : "bg-white"}
        borderColor={localMicOn && "#ffffff33"}
        isFocused={localMicOn}
        focusIconColor={localMicOn && "white"}
        tooltip={"Включить микрофон"}
        renderRightComponent={() => {
          return (
            <>
              <Popover className="relative">
                {({ close }) => (
                  <>
                    <Popover.Button
                      disabled={!isMicrophonePermissionAllowed}
                      className="flex items-center justify-center mt-1 mr-1 focus:outline-none"
                    >
                      <div
                        ref={btnRef}
                        onMouseEnter={openTooltip}
                        onMouseLeave={closeTooltip}
                      >
                        <button
                          onClick={() => {
                            getMics();
                          }}
                        >
                          <ChevronDownIcon
                            className="h-4 w-4"
                            style={{
                              color: mMeeting.localMicOn ? "white" : "black",
                            }}
                          />
                        </button>
                      </div>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 bottom-full z-10 mt-3 w-72 -translate-x-1/2 transform px-4 sm:px-0 pb-4">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className={" bg-gray-750 py-1"}>
                            <div>
                              <div className="flex items-center p-3 pb-0">
                                <p className="ml-3 text-sm text-gray-900">
                                  {"MICROPHONE"}
                                </p>
                              </div>
                              <div className="flex flex-col">
                                {mics.map(({ deviceId, label }, index) => (
                                  <div
                                    className={`px-3 py-1 my-1 pl-6 text-white text-left ${
                                      deviceId === selectedMic.id &&
                                      "bg-gray-150"
                                    }`}
                                  >
                                    <button
                                      className={`flex flex-1 w-full text-left ${
                                        deviceId === selectedMic.id &&
                                        "bg-gray-150"
                                      }`}
                                      key={`mics_${deviceId}`}
                                      onClick={() => {
                                        setSelectedMic({ id: deviceId });
                                        changeMic(deviceId);
                                        close();
                                      }}
                                    >
                                      {label || `Mic ${index + 1}`}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <hr className="border border-gray-50 mt-2 mb-1" />
                            <div>
                              <div className="flex p-3 pb-0">
                                <p className="ml-3 text-sm text-gray-900  text-center">
                                  {"SPEAKER"}
                                </p>
                              </div>
                              <div className="flex flex-col ">
                                {speakers.map(({ deviceId, label }, index) => (
                                  <div
                                    className={`px-3 py-1 my-1 pl-6 text-white ${
                                      deviceId === selectedSpeaker.id &&
                                      "bg-gray-150"
                                    }`}
                                  >
                                    <button
                                      className={`flex flex-1 w-full text-left ${
                                        deviceId === selectedSpeaker.id &&
                                        "bg-gray-150"
                                      }`}
                                      key={`speakers_${deviceId}`}
                                      onClick={() => {
                                        setSelectedSpeaker({ id: deviceId });
                                        close();
                                      }}
                                    >
                                      {label || `Speaker ${index + 1}`}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <div
                style={{ zIndex: 999 }}
                className={`${
                  tooltipShow ? "" : "hidden"
                } overflow-hidden flex flex-col items-center justify-center pb-4`}
                ref={tooltipRef}
              >
                <div className={"rounded-md p-1.5 bg-black "}>
                  <p className="text-base text-white ">{"Change microphone"}</p>
                </div>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

const WebCamBTN = () => {
  const { selectedWebcam, setSelectedWebcam, isCameraPermissionAllowed } =
    useMeetingAppContext();
  const { getCameras } = useMediaDevice();
  const mMeeting = useMeeting();
  const [webcams, setWebcams] = useState([]);
  const { getVideoTrack } = useMediaStream();

  const localWebcamOn = mMeeting?.localWebcamOn;
  const changeWebcam = mMeeting?.changeWebcam;

  const getWebcams = async () => {
    let webcams = await getCameras();
    webcams && webcams?.length && setWebcams(webcams);
  };

  const [tooltipShow, setTooltipShow] = useState(false);
  const btnRef = useRef();
  const tooltipRef = useRef();

  const openTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "top",
    });
    setTooltipShow(true);
  };
  const closeTooltip = () => {
    setTooltipShow(false);
  };

  return (
    <>
      <OutlinedButton
        Icon={localWebcamOn ? WebcamOnIcon : WebcamOffIcon}
        onClick={async () => {
          let track;
          if (!localWebcamOn) {
            track = await getVideoTrack({
              webcamId: selectedWebcam.id,
            });
          }
          mMeeting.toggleWebcam(track);
        }}
        bgColor={localWebcamOn ? "bg-gray-750" : "bg-white"}
        borderColor={localWebcamOn && "#ffffff33"}
        isFocused={localWebcamOn}
        focusIconColor={localWebcamOn && "white"}
        tooltip={"Включить веб-камеру"}
        renderRightComponent={() => {
          return (
            <>
              <Popover className="relative">
                {({ close }) => (
                  <>
                    <Popover.Button
                      disabled={!isCameraPermissionAllowed}
                      className="flex items-center justify-center mt-1 mr-1 focus:outline-none"
                    >
                      <div
                        ref={btnRef}
                        onMouseEnter={openTooltip}
                        onMouseLeave={closeTooltip}
                      >
                        <button
                          onClick={() => {
                            getWebcams();
                          }}
                        >
                          <ChevronDownIcon
                            className="h-4 w-4"
                            style={{
                              color: localWebcamOn ? "white" : "black",
                            }}
                          />
                        </button>
                      </div>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 bottom-full z-10 mt-3 w-72 -translate-x-1/2 transform px-4 sm:px-0 pb-4">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className={" bg-gray-750 py-1"}>
                            <div>
                              <div className="flex items-center p-3 pb-0">
                                <p className="ml-3 text-sm text-gray-900">
                                  {"WEBCAM"}
                                </p>
                              </div>
                              <div className="flex flex-col">
                                {webcams.map(({ deviceId, label }, index) => (
                                  <div
                                    className={`px-3 py-1 my-1 pl-6 text-white ${
                                      deviceId === selectedWebcam.id &&
                                      "bg-gray-150"
                                    }`}
                                  >
                                    <button
                                      className={`flex flex-1 w-full text-left ${
                                        deviceId === selectedWebcam.id &&
                                        "bg-gray-150"
                                      }`}
                                      key={`output_webcams_${deviceId}`}
                                      onClick={() => {
                                        setSelectedWebcam({ id: deviceId });
                                        changeWebcam(deviceId);
                                        close();
                                      }}
                                    >
                                      {label || `Webcam ${index + 1}`}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <div
                style={{ zIndex: 999 }}
                className={`${
                  tooltipShow ? "" : "hidden"
                } overflow-hidden flex flex-col items-center justify-center pb-4`}
                ref={tooltipRef}
              >
                <div className={"rounded-md p-1.5 bg-black "}>
                  <p className="text-base text-white ">{"Change webcam"}</p>
                </div>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block">
        <div className="bg-black text-base  text-white  rounded py-1 px-2 right-0 ">
          {text}
        </div>
        <div className="w-3 h-3 bg-black rotate-45 transform origin-bottom-right -translate-y-1/2 group-hover:block" />
      </div>
    </div>
  );
};

export function BottomBar({ bottomBarHeight, setIsMeetingLeft }) {
  let roomId = localStorage.getItem("roomId");
  let roomIdString = roomId ? JSON.parse(roomId) : null;
  const userData = localStorage.getItem("userData");
  const userDataString = userData ? JSON.parse(userData) : null;
  const kickPlayer = useKickPlayer();
  const detectMafia = useDetectMafia();
  const detectSheriff = useDetectSheriff();
  const sendFall = useSendFall();
  const killPlayer = useKillPlayer();
  const startNight = useStartNight();
  const wakeUpMafia = useWakeUpMafia();
  const wakeUpSheriff = useWakeUpSheriff();
  const wakeUpDon = useWakeUpDon();
  const startDay = useStartDay();
  const startGame = useStartGame();
  const startVote = useStartVote();
  const checkRole = useCheckRole();
  const { getRole, role } = useGetRole();
  const { players } = useGetPlayers(roomIdString);
  const { sideBarMode, setSideBarMode } = useMeetingAppContext();
  const [time, setTime] = useState();
  const [isBlackRectangleVisible, setIsBlackRectangleVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [sheriffFailed, setSheriffFailed] = useState(false);
  const [sheriffSucceed, setSheriffSucceed] = useState(false);
  const [mafia, setMafiaTime] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [voteButton, setVoteButton] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [isUIDisabled, setUIDisabled] = useState(false);
  const votePlayer = useVotePlayer();
  const endVote = useEndVote();

  roomId = roomId.replace(/"/g, "");
  roomId = parseInt(roomId, 10);

  const communicateWithDon = () => {
    if (userDataObject && userDataObject.role !== "Don") {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    socket.on("kicked", (data) => {
      alert(data.message);
      setIsDisabled(true);
      window.location.href = "https://mafshow.kz";
    });

    return () => {
      socket.off("kicked");
    };
  }, []);

  useEffect(() => {
    socket.on("killed", (data) => {
      setIsDead(true);
      window.location.href = "https://mafshow.kz";
    });

    return () => {
      socket.off("killed");
    };
  }, []);

  useEffect(() => {
    socket.on("MafiaWon", (data) => {
      alert(data.message);
      setUIDisabled(true);
      window.location.href = "https://mafshow.kz";
    });
  }, []);

  useEffect(() => {
    socket.on("InnocentWon", (data) => {
      alert(data.message);
      setUIDisabled(true);
      window.location.href = "https://mafshow.kz";
    });
  }, []);

  // useEffect(() => {
  //   socket.on("gameRunning", (data) => {
  //     alert(data.message);
  //   });
  // }, []);

  socket.on("nightStarted", () => {
    console.log("Night has begun. Everyone should wait.");
    setIsDisabled(true);
  });

  socket.on("dayStarted", () => {
    console.log("Day is here!");
    setIsDisabled(false);
  });

  socket.on("wakeUpMafia", (data) => {
    if (role === "Mafia") {
      setIsDisabled(false);
    }
  });

  socket.on("wakeUpDon", (data) => {
    if (role === "Don") {
      setIsDisabled(false);
    }
  });

  socket.on("wakeUpSheriff", (data) => {
    if (role === "Sheriff") {
      setIsDisabled(false);
    }
  });

  useEffect(() => {
    let timer;

    const handleSheriffDetected = (data) => {
      setSheriffSucceed(true);

      timer = setTimeout(() => {
        setSheriffSucceed(false);
      }, 2500);

      return () => clearTimeout(timer);
    };

    socket.on("sheriffDetected", handleSheriffDetected);

    return () => {
      socket.off("sheriffDetected", handleSheriffDetected);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let timer;

    const handleSheriffNotDetected = (data) => {
      setSheriffFailed(true);

      timer = setTimeout(() => {
        setSheriffFailed(false);
      }, 2500);

      return () => clearTimeout(timer);
    };

    socket.on("sheriffNotDetected", handleSheriffNotDetected);

    return () => {
      socket.off("sheriffNotDetected", handleSheriffNotDetected);
      clearTimeout(timer);
    };
  }, []);

  socket.on("wakeUpDon", (data) => {
    console.log("Don wake up!");
  });

  socket.on("connect_error", (error) => {
    console.log("Connection failed:", error);
  });

  socket.emit("checkMessage", (data) => {
    console.log("socket emit is working");
  });

  socket.on("wakeUpMafia", (data) => {
    console.log("Mafia wake up!");
  });

  socket.on("wakeUpSheriff", () => {
    console.log("Sheriff wake up!");
  });

  socket.on("disableUI", (data) => {
    console.log(data.message);
  });

  socket.on("voteStarted", () => {
    setVoteButton(true);
  });

  socket.on("dayStarted", () => {
    console.log("Day has begun. Everyone participates.");
  });

  const resetUI = () => {
    setIsDisabled(false);
  };

  useEffect(() => {
    getRole(roomId, userDataString.id);
  });

  useEffect(() => {
    socket.on("userWarned", (data) => {
      console.log(`user has been warned! ${data.userID}`);
    });
    return () => {
      socket.off("dayStarted");
      socket.off("nightStarted");
      socket.off("wakeUpMafia");
      socket.off("userWarned");
    };
  }, []);

  useEffect(() => {
    const handleNightStarted = () => {
      console.log("Night has started");
      setUIDisabled(true);
    };

    const handleDayStarted = () => {
      console.log("Day has started");
      setUIDisabled(false);
    };

    const handleToggleUI = (data) => {
      setUIDisabled(data.disable);
    };

    socket.on("nightStarted", handleNightStarted);
    socket.on("dayStarted", handleDayStarted);
    socket.on("toggleUI", handleToggleUI);

    return () => {
      socket.off("nightStarted", handleNightStarted);
      socket.off("dayStarted", handleDayStarted);
      socket.off("toggleUI", handleToggleUI);
    };
  }, []);

  socket.on("dayStarted", () => {
    console.log("Day has been started from the socket!");
  });

  const checkRoleDonAndDisableUI = () => {
    if (userDataString) {
      setIsDisabled(
        userDataString.gameRole !== "Don" || userDataString.role !== "showman"
      );

      console.log(userDataString.gameRole);
    }
    setIsBlackRectangleVisible(true);
  };

  const checkRoleSheriffAndDisableUI = () => {
    try {
      const response = checkRole();

      if (response && response.role === "Don") {
        setIsUIEnabled(false);
      } else {
        setIsUIEnabled(true);
      }
    } catch (error) {
      console.error("Error checking user role:", error);
    } finally {
    }
  };

  const RaiseHandBTN = ({ isMobile, isTab }) => {
    const { publish } = usePubSub("RAISE_HAND");
    const RaiseHand = () => {
      publish("Raise Hand");
    };

    return isMobile || isTab ? (
      <MobileIconButton
        id="RaiseHandBTN"
        tooltipTitle={"Поднять руку"}
        Icon={RaiseHandIcon}
        onClick={RaiseHand}
        buttonText={"Поднять руку"}
      />
    ) : (
      <OutlinedButton
        onClick={RaiseHand}
        tooltip={"Поднять руку"}
        Icon={RaiseHandIcon}
      />
    );
  };

  const RecordingBTN = () => {
    const { startRecording, stopRecording, recordingState } = useMeeting();
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: recordingBlink,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
      height: 64,
      width: 160,
    };

    const isRecording = useIsRecording();
    const isRecordingRef = useRef(isRecording);

    useEffect(() => {
      isRecordingRef.current = isRecording;
    }, [isRecording]);

    const { isRequestProcessing } = useMemo(
      () => ({
        isRequestProcessing:
          recordingState === Constants.recordingEvents.RECORDING_STARTING ||
          recordingState === Constants.recordingEvents.RECORDING_STOPPING,
      }),
      [recordingState]
    );

    const _handleClick = () => {
      const isRecording = isRecordingRef.current;

      if (isRecording) {
        stopRecording();
      } else {
        startRecording();
      }
    };

    return (
      <OutlinedButton
        Icon={RecordingIcon}
        onClick={_handleClick}
        isFocused={isRecording}
        tooltip={
          recordingState === Constants.recordingEvents.RECORDING_STARTED
            ? "Остановить запись"
            : recordingState === Constants.recordingEvents.RECORDING_STARTING
            ? "Начать запись"
            : recordingState === Constants.recordingEvents.RECORDING_STOPPED
            ? "Начать запись"
            : recordingState === Constants.recordingEvents.RECORDING_STOPPING
            ? "Остановить запись"
            : "Начать запись"
        }
        lottieOption={isRecording ? defaultOptions : null}
        isRequestProcessing={isRequestProcessing}
      />
    );
  };

  const ScreenShareBTN = ({ isMobile, isTab }) => {
    const { localScreenShareOn, toggleScreenShare, presenterId } = useMeeting();

    return isMobile || isTab ? (
      <MobileIconButton
        id="screen-share-btn"
        tooltipTitle={
          presenterId
            ? localScreenShareOn
              ? "Прекратить презентацию"
              : null
            : "Поделиться экраном"
        }
        buttonText={
          presenterId
            ? localScreenShareOn
              ? "Прекратить презентацию"
              : null
            : "Поделиться экраном"
        }
        isFocused={localScreenShareOn}
        Icon={ScreenShareIcon}
        onClick={() => {
          toggleScreenShare();
        }}
        disabled={
          presenterId
            ? localScreenShareOn
              ? false
              : true
            : isMobile
            ? true
            : false
        }
      />
    ) : (
      <OutlinedButton
        Icon={ScreenShareIcon}
        onClick={() => {
          toggleScreenShare();
        }}
        isFocused={localScreenShareOn}
        tooltip={
          presenterId
            ? localScreenShareOn
              ? "Stop Presenting"
              : null
            : "Present Screen"
        }
        disabled={presenterId ? (localScreenShareOn ? false : true) : false}
      />
    );
  };

  const LeaveBTN = () => {
    const { leave } = useMeeting();

    return (
      <OutlinedButton
        Icon={EndIcon}
        bgColor="bg-red-150"
        onClick={() => {
          leave();
          setIsMeetingLeft(true);
        }}
        tooltip="Покинуть комнату"
      />
    );
  };

  const ChatBTN = ({ isMobile, isTab }) => {
    return isMobile || isTab ? (
      <MobileIconButton
        tooltipTitle={"Чат"}
        buttonText={"Чат"}
        Icon={ChatIcon}
        isFocused={sideBarMode === sideBarModes.CHAT}
        onClick={() => {
          setSideBarMode((s) =>
            s === sideBarModes.CHAT ? null : sideBarModes.CHAT
          );
        }}
      />
    ) : (
      <OutlinedButton
        Icon={ChatIcon}
        onClick={() => {
          setSideBarMode((s) =>
            s === sideBarModes.CHAT ? null : sideBarModes.CHAT
          );
        }}
        isFocused={sideBarMode === "CHAT"}
        tooltip="Чат"
      />
    );
  };

  const ParticipantsBTN = ({ isMobile, isTab }) => {
    const { participants } = useMeeting();
    return isMobile || isTab ? (
      <MobileIconButton
        tooltipTitle={"Участники"}
        isFocused={sideBarMode === sideBarModes.PARTICIPANTS}
        buttonText={"Участники"}
        disabledOpacity={1}
        Icon={ParticipantsIcon}
        onClick={() => {
          setSideBarMode((s) =>
            s === sideBarModes.PARTICIPANTS ? null : sideBarModes.PARTICIPANTS
          );
        }}
        badge={`${new Map(participants)?.size}`}
      />
    ) : (
      <OutlinedButton
        Icon={ParticipantsIcon}
        onClick={() => {
          setSideBarMode((s) =>
            s === sideBarModes.PARTICIPANTS ? null : sideBarModes.PARTICIPANTS
          );
        }}
        isFocused={sideBarMode === sideBarModes.PARTICIPANTS}
        tooltip={"Все участники"}
        badge={`${new Map(participants)?.size}`}
      />
    );
  };

  const MeetingIdCopyBTN = () => {
    const { meetingId } = useMeeting();
    const [isCopied, setIsCopied] = useState(false);
    return (
      <div className="flex items-center justify-center lg:ml-0 ml-4 mt-4 xl:mt-0">
        <div className="flex border-2 border-gray-850 p-2 rounded-md items-center justify-center">
          <h1 className="text-white text-base ">{meetingId}</h1>
          <button
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(meetingId);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <CheckIcon className="h-5 w-5 text-green-400" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
    );
  };

  const DonButton = () => {
    const handleClick = () => {
      // checkRoleDonAndDisableUI();
      wakeUpDon(roomId);
    };

    return (
      <Tooltip text={"Разбудить Дона"}>
        <button
          className="bg-gray-750 ml-2 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] hover:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faGun} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const StartVote = () => {
    const handleClick = () => {
      startVote(roomId);
    };

    return (
      <Tooltip text={"Начать голосование"}>
        <button
          className="bg-gray-750 ml-2 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] hover:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faMark} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const EndVote = () => {
    const handleClick = () => {
      // checkRoleDonAndDisableUI();
      endVote(roomId);
    };

    return (
      <Tooltip text={"Закончить голосование"}>
        <button
          className="bg-gray-750 ml-2 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] hover:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faX} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const SheriffButton = () => {
    const handleClick = () => {
      wakeUpSheriff();
      // checkRoleSheriffAndDisableUI();
    };

    return (
      <Tooltip text={"Разбудить Шерифа"}>
        <button
          className="bg-gray-750 ml-2 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] hover:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faShield} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const KillPlayerSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handlePlayerSelection = (roomId, playerId) => {
      if (!isClicked) {
        killPlayer(roomId, playerId);
        setIsClicked(true);
        setIsOpen(false);
      }
    };

    const eligiblePlayers = players.filter(
      (player) =>
        player.gameRole !== "Showman" &&
        player.gameRole !== "Mafia" &&
        player.gameRole !== "Don"
    );

    return (
      <div className="relative inline-block bg-gray-750 ml-2 rounded-lg border-2 border-[#ffffff33]">
        {isOpen && (
          <div className="absolute bottom-full mb-1 w-full rounded-md bg-gray-700 max-h-40 overflow-auto">
            <ul className="text-white">
              {eligiblePlayers.map((player) => (
                <li
                  key={player.id}
                  onClick={() => handlePlayerSelection(roomId, player.id)}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  {player.username}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="bg-gray-750 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
          disabled={false} // Always allow toggling the dropdown
        >
          <span>Убить игрока</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-xs"
          />
        </button>
      </div>
    );
  };

  const DetectSheriffButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const eligiblePlayers = players.filter(
      (player) =>
        player.gameRole !== "Showman" &&
        player.gameRole !== "Mafia" &&
        player.gameRole !== "Don"
    );

    const handleSheriffDetection = (roomId, playerId) => {
      if (!isClicked) {
        detectSheriff(roomId, playerId);
        setIsClicked(true);
        setIsOpen(false);
      }
    };

    return (
      <div className="relative inline-block bg-gray-750 ml-2 rounded-lg border-2 border-[#ffffff33]">
        {isOpen && (
          <div className="absolute bottom-full mb-1 w-full rounded-md bg-gray-700 max-h-40 overflow-auto">
            <ul className="text-white">
              {eligiblePlayers.map((player) => (
                <li
                  key={player.id}
                  onClick={() => handleSheriffDetection(roomId, player.id)}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  {player.username}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="bg-gray-750 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
          disabled={isClicked}
        >
          <span>Найти Шерифа</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-xs"
          />
        </button>
      </div>
    );
  };

  const VotePlayerSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleVote = (roomId, playerId) => {
      if (!isClicked) {
        votePlayer(roomId, playerId);
        setIsClicked(true);
        setIsOpen(false);
      }
    };

    return (
      <div className="relative inline-block bg-gray-750 ml-2 rounded-lg border-2 border-[#ffffff33]">
        {isOpen && (
          <div className="absolute bottom-full mb-1 w-full rounded-md bg-gray-700 max-h-40 overflow-auto">
            <ul className="text-white">
              {players
                .filter((player) => player.role !== "showman")
                .map((player) => (
                  <li
                    key={player.id}
                    onClick={() => handleKickPlayer(roomId, player.id)}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    <span className="text-primary-light mr-2">
                      {player.cameraPlayerNumber}
                    </span>
                    {player.username}
                  </li>
                ))}
            </ul>
          </div>
        )}
        <button
          className="bg-gray-750 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
          disabled={isClicked}
        >
          <span>Проголосовать</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-xs"
          />
        </button>
      </div>
    );
  };

  const PlayerSelector = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (roomID, playerId) => {
      console.log(roomID);
      sendFall(roomID, playerId);
    };

    return (
      <div className="relative inline-block bg-gray-750 ml-2 rounded-lg border-2 border-[#ffffff33]">
        {isOpen && (
          <div className="absolute bottom-full mb-1 w-full rounded-md  bg-gray-700 max-h-40 overflow-auto">
            <ul className="text-white">
              {players
                .filter((player) => player.role !== "showman")
                .map((player) => (
                  <li
                    key={player.id}
                    onClick={() => handleKickPlayer(roomId, player.id)}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    <span className="text-primary-light mr-2">
                      {player.cameraPlayerNumber}
                    </span>
                    {player.username}
                  </li>
                ))}
            </ul>
          </div>
        )}
        <button
          className="bg-gray-750 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Дать фолл</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-xs"
          />
        </button>
      </div>
    );
  };

  const KickSelector = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleKickPlayer = (roomId, playerId) => {
      kickPlayer(roomId, playerId);
      setIsOpen(false);
    };

    return (
      <div className="relative inline-block bg-gray-750 ml-2 rounded-lg border-2 border-[#ffffff33]">
        {isOpen && (
          <div className="absolute bottom-full mb-1 w-full rounded-md bg-gray-700 max-h-40 overflow-auto">
            <ul className="text-white">
              {players
                .filter((player) => player.role !== "showman")
                .map((player) => (
                  <li
                    key={player.id}
                    onClick={() => handleKickPlayer(roomId, player.id)}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    <span className="text-primary-light mr-2">
                      {player.cameraPlayerNumber}
                    </span>
                    {player.username}
                  </li>
                ))}
            </ul>
          </div>
        )}
        <button
          className="bg-gray-750 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Кикнуть</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-xs"
          />
        </button>
      </div>
    );
  };

  const NightButton = () => {
    const handleClick = () => {
      setTime("Night");
      setShowPopup(true);
      startNight(roomId);
      setTimeout(() => setShowPopup(false), 2500);
    };

    return (
      <Tooltip text={"Поставить ночь"}>
        <button
          className="bg-gray-750 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] hover:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50 ml-2"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faMoon} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const DayButton = () => {
    const handleClick = () => {
      setTime("Day");
      startDay(roomId);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2500);
    };

    return (
      <Tooltip text={"Поставить день"}>
        <button
          className="bg-gray-750 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] hover:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faSun} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const RoleTab = ({ role }) => {
    let translatedRole;
    switch (role) {
      case "Innocent":
        translatedRole = "Мирный";
        break;
      case "Mafia":
        translatedRole = "Мафия";
        break;
      case "Don":
        translatedRole = "Дон";
        break;
      case "Sheriff":
        translatedRole = "Шерифф";
        break;
      default:
        translatedRole = role;
    }
    return (
      <div className="relative flex items-center justify-center bg-gray-800 p-2 rounded-lg border-2 border-[#ffffff33] ml-2">
        <span className="text-primary-red  font-killbill text-2xl">
          {translatedRole}
        </span>
      </div>
    );
  };

  const MafiaButton = () => {
    const handleClick = () => {
      wakeUpMafia(roomId);
    };

    return (
      <Tooltip text={"Разбудить Мафию"}>
        <button
          className="bg-gray-750 p-2 pl-3 pr-3 rounded-lg border-2 border-[#ffffff33] focus:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50 ml-2"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faHatCowboy} className="text-white text-xl" />
        </button>
      </Tooltip>
    );
  };

  const MafiaSelectorForSheriff = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false); // Tracks whether a selection has been made

    // Function to handle the detection of a mafia member
    const handleDetectMafia = (roomId, playerId) => {
      if (!isClicked) {
        // Ensure the detection can only happen once
        detectMafia(roomId, playerId);
        setIsClicked(true); // Prevent further selections
        setIsOpen(false); // Close the dropdown after selection
      }
    };

    return (
      <div className="relative inline-block bg-gray-750 rounded-lg border-2 border-[#ffffff33]">
        {isOpen && (
          <div className="absolute bottom-full mb-1 w-full rounded-md bg-gray-700 max-h-40 overflow-auto">
            <ul className="text-white">
              {players.map((player) => (
                <li
                  key={player.id}
                  onClick={() => handleDetectMafia(roomId, player.id)}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  {player.username}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="bg-gray-750 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          onClick={() => !isClicked && setIsOpen(!isOpen)} // Only toggle if no selection has been made
          disabled={isClicked} // Disable the button after a selection has been made
        >
          <span>Выберите мафиози</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-xs"
          />
        </button>
      </div>
    );
  };

  const NightCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      socket.on("night");
    });
  };

  // const StartButton = () => {
  //   const handleClick = () => {
  //     startGame(roomId);
  //   };

  //   return (
  //     <Tooltip text={"Начать игру"}>
  //       <button
  //         className="bg-gray-750 p-2 pl-3 pr-3 rounded-lg border-2 text-white border-[#ffffff33] focus:outline-none hover:border-white focus:ring-2 focus:ring-opacity-50 ml-2"
  //         onClick={handleClick}
  //       >
  //         Старт
  //       </button>
  //     </Tooltip>
  //   );
  // };

  const tollTipEl = useRef();
  const isMobile = useIsMobile();
  const isTab = useIsTab();
  const [open, setOpen] = useState(false);

  const handleClickFAB = () => {
    setOpen(true);
  };

  const handleCloseFAB = () => {
    setOpen(false);
  };

  const Popup = ({ whichTime }, { mafia }) => {
    return (
      <div className="absolute top-8 mb-4 w-48 py-2 font-killbill z-1000 rounded-lg text-primary-light text-3xl text-center bg-primary-dark border-2 border-primary-red pt-4 pb-4">
        {whichTime === "Day" ? <>День</> : <>Ночь</>}
        {mafia && <>Время для знакомства с мафией</>}
      </div>
    );
  };

  const BottomBarButtonTypes = useMemo(
    () => ({
      END_CALL: "END_CALL",
      CHAT: "CHAT",
      PARTICIPANTS: "PARTICIPANTS",
      SCREEN_SHARE: "SCREEN_SHARE",
      WEBCAM: "WEBCAM",
      MIC: "MIC",
      RAISE_HAND: "RAISE_HAND",
      RECORDING: "RECORDING",
      PIP: "PIP",
      MEETING_ID_COPY: "MEETING_ID_COPY",
    }),
    []
  );

  const otherFeatures = [
    { icon: BottomBarButtonTypes.RAISE_HAND },
    { icon: BottomBarButtonTypes.PIP },
    { icon: BottomBarButtonTypes.SCREEN_SHARE },
    { icon: BottomBarButtonTypes.CHAT },
    { icon: BottomBarButtonTypes.PARTICIPANTS },
    { icon: BottomBarButtonTypes.MEETING_ID_COPY },
  ];

  return isMobile || isTab ? (
    <div
      className="flex items-center justify-center"
      style={{ height: bottomBarHeight }}
    >
      <LeaveBTN />
      <MicBTN />
      {isDisabled && userDataString.role !== "showman" && (
        <div className="bg-black w-full h-full absolute top-0 flex items-center justify-center !z-[100000000000000000000000000000000000000]">
          <span className="text-primary-red font-killbill text-5xl">
            Сейчас ночь...
          </span>
        </div>
      )}
      {userDataString.role == "showman" && (
        <>
          <DayButton />
          <NightButton />
          <MafiaButton />
          <DonButton />
          <SheriffButton />
          {/* <StartButton /> */}
          <PlayerSelector />
          <KickSelector />
          <EndVote />
        </>
      )}
      {role === "Sheriff" && (
        <>
          <MafiaSelectorForSheriff />
          <VotePlayerSelector />
        </>
      )}
      {role === "Mafia" && (
        <>
          <KillPlayerSelector />
          <VotePlayerSelector />
          {/* <VotePlayerSelector /> */}
        </>
      )}
      {role === "Innocent" && (
        <>
          <VotePlayerSelector />
        </>
      )}
      {role === "Don" && (
        <>
          {sheriffFailed && (
            <>
              <div className="absolute top-8  left-0 m- mb-4 w-48 py-2 font-killbill z-1000 rounded-lg text-primary-light text-3xl text-center bg-primary-dark border-2 border-primary-red pt-4 pb-4">
                Нет, это не Шериф!
              </div>
            </>
          )}
          <DetectSheriffButton />
          <VotePlayerSelector />
        </>
      )}
      <WebCamBTN />
      <RecordingBTN />
      <OutlinedButton Icon={DotsHorizontalIcon} onClick={handleClickFAB} />
      <Transition appear show={Boolean(open)} as={Fragment}>
        <Dialog
          as="div"
          className="relative"
          style={{ zIndex: 9999 }}
          onClose={handleCloseFAB}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-y-full opacity-0 scale-95"
            enterTo="translate-y-0 opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="translate-y-0 opacity-100 scale-100"
            leaveTo="translate-y-full opacity-0 scale-95"
          >
            <div className="fixed inset-0 overflow-y-hidden">
              <div className="flex h-full items-end justify-end text-center">
                <Dialog.Panel className="w-screen transform overflow-hidden bg-gray-800 shadow-xl transition-all">
                  <div className="grid container bg-gray-800 py-6">
                    <div className="grid grid-cols-12 gap-2">
                      {otherFeatures.map(({ icon }) => {
                        return (
                          <div
                            className={`grid items-center justify-center ${
                              icon === BottomBarButtonTypes.MEETING_ID_COPY
                                ? "col-span-7 sm:col-span-5 md:col-span-3"
                                : "col-span-4 sm:col-span-3 md:col-span-2"
                            }`}
                          >
                            {icon === BottomBarButtonTypes.RAISE_HAND ? (
                              <RaiseHandBTN isMobile={isMobile} isTab={isTab} />
                            ) : icon === BottomBarButtonTypes.SCREEN_SHARE ? (
                              <ScreenShareBTN
                                isMobile={isMobile}
                                isTab={isTab}
                              />
                            ) : icon === BottomBarButtonTypes.CHAT ? (
                              <ChatBTN isMobile={isMobile} isTab={isTab} />
                            ) : icon === BottomBarButtonTypes.PARTICIPANTS ? (
                              <ParticipantsBTN
                                isMobile={isMobile}
                                isTab={isTab}
                              />
                            ) : icon ===
                              BottomBarButtonTypes.MEETING_ID_COPY ? (
                              <MeetingIdCopyBTN
                                isMobile={isMobile}
                                isTab={isTab}
                              />
                            ) : icon === BottomBarButtonTypes.PIP ? (
                              <PipBTN isMobile={isMobile} isTab={isTab} />
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  ) : (
    <div className="md:flex lg:px-2 xl:px-6 pb-2 px-2 hidde">
      <MeetingIdCopyBTN />

      {userDataString.role !== "showman" && (
        <>
          <RoleTab role={role} />
        </>
      )}
      {isDisabled && userDataString.role !== "showman" && (
        <div className="bg-black w-full h-full absolute top-0 flex items-center justify-center !z-[100000000000000000000000000000000000000]">
          <span className="text-primary-red font-killbill text-5xl">
            Сейчас ночь...
          </span>
        </div>
      )}
      <div className="flex flex-1 items-center justify-center" ref={tollTipEl}>
        <RecordingBTN />
        {role === "Sheriff" && (
          <>
            <MafiaSelectorForSheriff />
            <VotePlayerSelector />
          </>
        )}
        {role === "Mafia" && (
          <>
            <KillPlayerSelector />
            <VotePlayerSelector />
          </>
        )}
        {role === "Innocent" && (
          <>
            <VotePlayerSelector />
          </>
        )}
        {role === "Don" && (
          <>
            {sheriffSucceed && (
              <>
                <div className="absolute top-8 mb-4 left-[50%] translate-[-50%, 0] w-48 py-2 font-killbill z-1000 rounded-lg text-primary-light text-3xl text-center bg-primary-dark border-2 border-primary-red pt-4 pb-4">
                  Да, это Шериф!
                </div>
              </>
            )}
            {sheriffFailed && (
              <>
                <div className="absolute top-8 mb-4 left-[50%] translate-[-50%, 0] w-48 py-2 font-killbill z-1000 rounded-lg text-primary-light text-3xl text-center bg-primary-dark border-2 border-primary-red pt-4 pb-4">
                  Нет, это не Шериф!
                </div>
              </>
            )}
            <DetectSheriffButton />
            <VotePlayerSelector />
          </>
        )}
        {userDataString.role == "showman" && (
          <>
            <DayButton />
            <NightButton />
            <MafiaButton />
            <DonButton />
            <SheriffButton />
            {/* <StartButton /> */}
            <PlayerSelector />
            <KickSelector />
            <EndVote />
          </>
        )}
        {showPopup && <Popup whichTime={time} mafia={mafia} />}
        <MicBTN />
        <WebCamBTN />
        {voteButton && (
          <>
            <VotePlayerSelector />
          </>
        )}
        <LeaveBTN />
      </div>
      <div className="flex items-center justify-center">
        <ChatBTN isMobile={isMobile} isTab={isTab} />
        <ParticipantsBTN isMobile={isMobile} isTab={isTab} />
      </div>
    </div>
  );
}
