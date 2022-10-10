import Head from "next/head";
import ChannelSuport from "../components/ChannelSuport";
import ContainerPage from "../components/ContainerPage";
import { SectionHeading, SectionChannels } from "../styles/pages/Suport";
import suportData from "../json/suportData.json";

const Suport = () => {
  return (
    <ContainerPage>
      <Head>
        <title>Entre em contato com a Funko Store</title>
      </Head>
      <SectionHeading>
        <h1>Como você prefere falar com a gente?</h1>
      </SectionHeading>
      <SectionChannels>
        {suportData.map((channel, index) => (
          <ChannelSuport
            key={index}
            channelName={channel.channelName}
            channelMessage={channel.ChannelMessage}
            channelLink={channel.channelLink}
            channelValue={channel.ChannelValue}
          />
        ))}
      </SectionChannels>
    </ContainerPage>
  );
};

export default Suport;
