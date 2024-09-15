"use client";
import TawkMessengerReact, { TawkAPI } from "@tawk.to/tawk-messenger-react";
import { useEffect, useRef, useState } from "react";

function TawkMessenger() {
  const tawkMessengerRef = useRef<TawkAPI>();
  const [visitorName, setVisitorName] = useState("Zaw Z");
  const [visitorEmail, setVisitorEmail] = useState("zawzawmyint1997@gmail.com");
  const [visitorHashValue, setVisitorHashValue] = useState("");

  const onBeforeLoad = () => {
    // place your code here
  };

  const onLoad = () => {
    console.log("onLoad works!");
    tawkMessengerRef?.current?.toggle();
    // tawkMessengerRef?.current?.addTags(["hello", "world"], function (error) {
    //   // do something if error
    //   console.log("tag error: " + error);
    // });
    // tawkMessengerRef?.current?.maximize();
    // const pageStatus = tawkMessengerRef?.current?.getStatus();
    // console.log("pageStatus: " + pageStatus);

    // Fetch hash value when Tawk Messenger has loaded
    // const response = await fetch("/api/generate-tawk-hash", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email: visitorEmail }),
    // });

    // const data = await response.json();
    // setVisitorHashValue(data.hash);

    // if (tawkMessengerRef.current) {
    //   tawkMessengerRef.current.visitor({
    //     name: visitorName,
    //     email: visitorEmail,
    //     hash: data.hash,
    //   });
    // }
  };

  const onStatusChange = (status: string) => {
    console.log("onStatusChange", status);
  };

  const onChatMessageVisitor = (message: object) => {
    console.log("onChatMessageVisitor", message);
  };

  const onChatMessageAgent = (message: object) => {
    console.log("onChatMessageAgent", message);
  };

  const onVisitorNameChanged = (visitorName: string) => {
    // place your code here

    console.log("onVisitorNameChanged", visitorName);
  };

  const onChatMaximized = () => {
    // place your code here
    console.log("onChatMaximized");
  };

  const onChatSatisfaction = (satisfaction: number) => {
    // place your code here
    console.log("onChatSatisfaction", satisfaction);
  };

  return (
    <div>
      {/* <h1>Visitor hash value : {visitorHashValue}</h1> */}
      <TawkMessengerReact
        propertyId="66d17c8cea492f34bc0ba94f"
        widgetId="1i6h4t2gg"
        ref={tawkMessengerRef}
        onBeforeLoad={onBeforeLoad}
        onChatSatisfaction={onChatSatisfaction}
        onLoad={onLoad}
        onStatusChange={onStatusChange}
        onChatMessageVisitor={onChatMessageVisitor}
        onChatMessageAgent={onChatMessageAgent}
        onVisitorNameChanged={onVisitorNameChanged}
        onChatMaximized={onChatMaximized}
        customStyle={{ zIndex: "1000 !important" }}
      />
    </div>
  );
}

export default TawkMessenger;
