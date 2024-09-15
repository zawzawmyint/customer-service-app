"use client";
import React from "react";
import { IntercomProvider } from "react-use-intercom";
import IntercomHome from "./IntercomHome";

// Environment variable should be prefixed with NEXT_PUBLIC_ for client-side access
const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

const IntercomMessenger = () => {
  const [unreadMessagesCount, setUnreadMessagesCount] = React.useState(0);

  const onHide = () => console.log("Intercom did hide the Messenger");
  const onShow = () => console.log("Intercom did show the Messenger");
  const onUnreadCountChange = (amount: number) => {
    console.log("Intercom has a new unread message", amount);
    setUnreadMessagesCount(amount);
  };
  const onUserEmailSupplied = () => {
    console.log("Visitor has entered email");
  };

  // Check if the INTERCOM_APP_ID is available
  if (!INTERCOM_APP_ID) {
    return <div>Intercom is not available. Missing app ID.</div>;
  }

  return (
    <IntercomProvider
      appId={INTERCOM_APP_ID}
      onHide={onHide}
      onShow={onShow}
      onUnreadCountChange={onUnreadCountChange}
      onUserEmailSupplied={onUserEmailSupplied}
      autoBoot
    >
      {/* Optionally render IntercomHome or any other components */}
      {/* <IntercomHome /> */}
    </IntercomProvider>
  );
};

export default IntercomMessenger;
