import React from "react";
import { ContainerChannel } from "./styles";

interface ChannelSuportProps {
  channelName: string;
  channelLink: string;
  channelMessage: string;
  channelValue: number | string;
}

const ChannelSuport = (props: ChannelSuportProps) => {
  return (
    <ContainerChannel>
      <h2>{props.channelName}</h2>
      <p>{props.channelMessage}</p>
      <a href={props.channelLink} target="_blank" rel="noreferrer">
        {props.channelValue}
      </a>
    </ContainerChannel>
  );
};

export default ChannelSuport;
