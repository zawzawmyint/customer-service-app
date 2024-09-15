import React from "react";
import { useIntercom } from "react-use-intercom";

const IntercomHome = () => {
  const {
    boot,
    shutdown,
    hardShutdown,
    update,
    hide,
    show,
    showMessages,
    showNewMessage,
    getVisitorId,
    startTour,
    startChecklist,
    trackEvent,
    showArticle,
    startSurvey,
    showSpace,
    showTicket,
    showConversation,
  } = useIntercom();

  const bootWithProps = () => boot({ name: "Russo" });
  const updateWithProps = () => update({ name: "Ossur" });
  const handleNewMessages = () => showNewMessage();
  const handleNewMessagesWithContent = () => showNewMessage("content");
  const handleGetVisitorId = () => console.log(getVisitorId());
  const handleStartTour = () => startTour(123);
  const handleStartChecklist = () => startChecklist(456);
  const handleTrackEvent = () => trackEvent("invited-friend");
  const handleTrackEventWithMetaData = () =>
    trackEvent("invited-frind", {
      name: "Russo",
    });
  const handleShowArticle = () => showArticle(123456);
  const handleStartSurvey = () => startSurvey(123456);
  const handleShowSpace = () => showSpace("tasks");
  const handleShowTicket = () => showTicket(123);
  const handleShowConversation = () => showConversation(123);

  return (
    <>
      <button onClick={() => boot()}>Boot intercom</button>
      <button onClick={bootWithProps}>Boot with props</button>
      {/*  <button onClick={shutdown}>Shutdown</button>
      <button onClick={hardShutdown}>Hard shutdown</button>
       <button onClick={update}>Update clean session</button>
      <button onClick={updateWithProps}>Update session with props</button>
      <button onClick={show}>Show messages</button>
      <button onClick={hide}>Hide messages</button>
      <button onClick={showMessages}>Show message list</button>
      <button onClick={handleNewMessages}>Show new messages</button>
      <button onClick={handleNewMessagesWithContent}>
        Show new message with pre-filled content
      </button>
      <button onClick={handleGetVisitorId}>Get visitor id</button>
      <button onClick={handleStartTour}>Start tour</button>
      <button onClick={handleStartChecklist}>Start checklist</button>
      <button onClick={handleTrackEvent}>Track event</button>
      <button onClick={handleTrackEventWithMetaData}>
        Track event with metadata
      </button>
      <button onClick={handleShowArticle}>Open article in Messenger</button>
      <button onClick={handleStartSurvey}>Start survey in Messenger</button>
      <button onClick={handleShowSpace}>Open space in Messenger</button>
      <button onClick={handleShowTicket}>Open ticket in Messenger</button>
      <button onClick={handleShowConversation}>
        Open conversation in Messenger
      </button> */}
    </>
  );
};

export default IntercomHome;
