import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";
import WordCloud from "@/components/WordCloud";

type Props = {};

const HotTopicsCard = async (props: Props) => {
  // const topics = await prisma.topic_count.findMany({});
  // const formattedTopics = topics.map((topic) => {
  //   return {
  //     text: topic.topic,
  //     value: topic.count,
  //   };
  // });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        {/* <WordCloud formattedTopics={formattedTopics} /> */}
        <WordCloud formattedTopics={[{ text: "1", value: 5 }]} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
