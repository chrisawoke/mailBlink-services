import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { Radialdata as data } from "./Data";
export default function RadialChart() {
  //

  // let innerWidth = window.innerWidth;
  // let innerheight = window.innerHeight;
  let innerWidth = 1000;
  let innerheight = 1000;
  // Dynamic value of margin based on window width
  let x;

  if (innerWidth <= 768) {
    x = 2;
    if (innerWidth === 768 && innerheight === 1024) {
      x = 300;
    } else x = 2; // Set x value
  } else if (innerWidth <= 1025) {
    x = 300; // Set x value
  } else {
    x = 420; // Set x value
  }

  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=">-.2f"
      startAngle={-3}
      endAngle={272}
      innerRadius={0.25}
      padding={0.25}
      cornerRadius={2}
      margin={{ top: 30, right: x, bottom: 30, left: 40 }}
      colors={{ scheme: "category10" }}
      enableRadialGrid={false}
      enableCircularGrid={false}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      transitionMode="innerRadius"
      legends={[]}
      tooltip={() => {
        return (
          <div className="w-fit h-fit bg-ui_primary text-accent_4 p-3 relative z-50">
            Metrics
          </div>
        );
      }}
    />
  );
}
