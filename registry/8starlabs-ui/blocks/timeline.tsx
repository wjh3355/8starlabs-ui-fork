import {
  TimelineItem as TimelineItemType,
  TimelineProps
} from "./timelineTypes";
import { TimelineClient, TimelineItem } from "./timeline-client";
import { Children } from "react";

export const timelineData: TimelineItemType[] = [
  {
    title: "Project Kickoff",
    description:
      "Initial meeting with all stakeholders to define project scope.",
    date: new Date("2023-01-05")
  },
  {
    title: "Requirements Gathering",
    description:
      "Collected requirements from the client, covering both functional and non-functional aspects. This took several sessions over multiple weeks and included detailed analysis.",
    date: new Date("2023-01-12"),
    highlight: true
  },
  {
    title: "Design Phase",
    description: "Created wireframes, mockups, and system design diagrams.",
    date: new Date("2023-01-20")
  },
  {
    title:
      "Database Setup Extravaganza with Lots of Unnecessary Complexity for Testing Purposes Only",
    description:
      "Configured databases, tables, and initial seed data for testing. This included hundreds of tables, dozens of indexes, and a complicated schema that will never be used in production.",
    date: new Date("2023-02-01")
  },
  {
    title: "Backend Development",
    description:
      "Implemented API endpoints, authentication, and core business logic.",
    date: new Date("2023-02-15")
  },
  {
    title: "Frontend Development",
    description:
      "Built user interface components with responsive layouts, ensuring pixel-perfect alignment across all browsers, including Internet Explorer 11.",
    date: new Date("2023-02-28"),
    highlight: true
  },
  {
    title: "Integration Testing",
    description: "Tested interaction between backend and frontend modules.",
    date: new Date("2023-03-10")
  },
  {
    title: "Bug Fixing Marathon",
    description:
      "Resolved critical bugs discovered during testing, improving system stability. Some bugs were so obscure they only appeared once every 10,000 interactions.",
    date: new Date("2023-03-20")
  },
  {
    title: "Client Review",
    description: "Presented working prototype to the client for feedback.",
    date: new Date("2023-03-25")
  },
  {
    title: "Performance Optimization",
    description: "Optimized queries and UI rendering for faster performance.",
    date: new Date("2023-04-01")
  },
  {
    title: "User Acceptance Testing",
    description:
      "Supported client testing sessions and logged user feedback. Some sessions included dozens of simultaneous users interacting with every feature imaginable.",
    date: new Date("2023-04-10")
  },
  {
    title: "Documentation",
    description: "Created technical documentation and user manuals.",
    date: new Date("2023-04-15")
  },
  {
    title: "Deployment Preparation",
    description: "Configured servers, CI/CD pipelines, and deployment scripts.",
    date: new Date("2023-04-20")
  },
  {
    title: "Go Live Celebration with Confetti and Fireworks",
    description:
      "Officially launched the system for production use. The team celebrated with a massive online party that included streaming music, confetti, and shoutouts.",
    date: new Date("2023-04-25"),
    highlight: true
  },
  {
    title: "Post-Launch Monitoring",
    description:
      "Monitored system performance and error logs after deployment.",
    date: new Date("2023-04-30")
  },
  {
    title: "Feature Enhancement",
    description: "Started adding new requested features and improvements.",
    date: new Date("2023-05-05")
  },
  {
    title: "Security Audit",
    description:
      "Performed a comprehensive security review and fixed vulnerabilities.",
    date: new Date("2023-05-10")
  },
  {
    title: "Team Retrospective",
    description:
      "Held a meeting to discuss what went well and what could be improved.",
    date: new Date("2023-05-15")
  },
  {
    title: "Client Handoff",
    description:
      "Provided final deliverables and handed over source code to client.",
    date: new Date("2023-05-20")
  },
  {
    title: "Project Closure",
    description: "Archived project materials and formally closed the project.",
    date: new Date("2023-05-25")
  }
];

export function Timeline({
  children,
  dateDisplayFormat = "day",
  alternating = true,
  alignment = "top",
  lineColor = "#9CA3AF",
  lineThickness = 5,
  lineProtrusion = 50,
  circleSize = 24,
  circleColor = "#FFFFFF",
  circleBorderColor = "#9CA3AF",
  circleThickness = 5,
  itemFillColor = "#FFFFFF",
  itemBorderThickness = 2,
  itemBorderColor = "#9CA3AF",
  itemTextAlignment = "left",
  itemSpacing = 20,
  itemWidth = 220,
  itemGap = 8,
  shadow = false
}: TimelineProps) {
  return (
    <TimelineClient
      config={{
        numElements: Children.count(children),
        toHighlight: children
          .map((child, index) =>
            (child.props as TimelineItemType).highlight ? index : -1
          )
          .filter((index) => index !== -1),
        dateDisplayFormat,
        alternating,
        alignment,
        lineColor,
        lineThickness,
        lineProtrusion,
        circleSize,
        circleColor,
        circleBorderColor,
        circleThickness,
        itemFillColor,
        itemBorderThickness,
        itemBorderColor,
        itemTextAlignment,
        itemSpacing,
        itemWidth,
        itemGap,
        shadow
      }}
    >
      {children}
    </TimelineClient>
  );
}

export default function TimelineDemo() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Timeline
        dateDisplayFormat="day"
        // alternating={false}
        // alignment="bottom"
        // lineColor="#EB34D2"
        // lineThickness={9}
        // lineProtrusion={150}
        // circleSize={40}
        // circleThickness={10}
        // circleColor="lightGreen"
        // circleBorderColor="#3492eb"
        // itemFillColor="#ffffff"
        // itemBorderThickness={2}
        // itemBorderColor="#440000"
        // itemTextAlignment="left"
        // itemSpacing={220}
        // itemWidth={240}
        // itemGap={8}
        // shadow={false}
      >
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </Timeline>
    </div>
  );
}
