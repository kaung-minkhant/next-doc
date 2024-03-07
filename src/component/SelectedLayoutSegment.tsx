"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function SelectedLayoutSegment() {
  const segment = useSelectedLayoutSegment();
  console.log({ segment });
  return (
    <div className="m-2">
      Selected Layout Segment: {segment}
    </div>
  );
}
