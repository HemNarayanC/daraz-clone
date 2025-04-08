import React from "react";

const Title = (props) => {
  return (
    <div className="font-[NotoSans-Regular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei, sans-serif !important] text-[22px] text-[#424242] font-normal mx-auto w-[1188px] py-2">
      {props.label}
    </div>
  );
};

export default Title;
