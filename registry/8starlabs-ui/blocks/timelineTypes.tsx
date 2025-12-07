import { ReactElement } from "react";

export type TimelineItem = {
  title: string;
  description: string;
  date: Date;
  highlight?: boolean;
};

export type TimelineProps = {
  children: ReactElement<TimelineItem>[];

  dateDisplayFormat?: "day" | "month" | "year";

  alternating?: boolean;
  alignment?: "top" | "bottom";

  lineColor?: string;
  lineThickness?: number;
  lineProtrusion?: number;

  circleSize?: number;
  circleColor?: string;
  circleBorderColor?: string;
  circleThickness?: number;

  itemFillColor?: string;
  itemBorderThickness?: number;
  itemBorderColor?: string;
  itemTextAlignment?: "left" | "center" | "right";
  itemSpacing?: number;
  itemWidth?: number;
  itemGap?: number;

  title?: string;
  titleColor?: string;
  titleSize?: number;

  shadow?: boolean;
};

export type TimelineConfig = Omit<TimelineProps, "children"> & {
  numElements: number;
  toHighlight: number[];
};
