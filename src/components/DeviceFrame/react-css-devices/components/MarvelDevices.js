import React, { Component, defaultProps } from "react";
import PropTypes from "prop-types";

const deviceContents = [
  "top-bar",
  "sleep",
  "volume",
  "camera",
  "sensor",
  "speaker",
  "screen",
  "home",
  "bottom-bar",
];

const availableDevices = [
  {
    deviceName: "iphone6",
    content: [...deviceContents],
    width: 423,
    height: 887,
  },
  {
    deviceName: "iphone6plus",
    content: [...deviceContents],
    width: 466,
    height: 960,
  },
  {
    deviceName: "iphone5s",
    content: [...deviceContents],
    width: 364,
    height: 778,
  },
  {
    deviceName: "iphone5c",
    content: [...deviceContents],
    width: 364,
    height: 778,
  },
  {
    deviceName: "ipad",
    content: ["camera", "screen", "home"],
    width: 626,
    height: 948,
  },
  {
    deviceName: "iphone4s",
    content: [...deviceContents],
    width: 374,
    height: 738,
  },
  {
    deviceName: "nexus5",
    content: ["top-bar", "sleep", "volume", "camera", "screen"],
    width: 350,
    height: 668,
  },
  {
    deviceName: "s5",
    content: [
      "top-bar",
      "sleep",
      "camera",
      "sensor",
      "speaker",
      "screen",
      "home",
    ],
    width: 356,
    height: 668,
  },
  {
    deviceName: "htc-one",
    content: ["top-bar", "camera", "sensor", "speaker", "screen"],
    width: 370,
    height: 740,
  },
  {
    deviceName: "macbook",
    content: ["top-bar", "camera", "screen", "bottom-bar"],
    width: 1048,
    height: 720,
  },
];

class MarvelDevices extends Component {
  constructor(props) {
    super(props);
    this.createDeviceDivs = this.createDeviceDivs.bind(this);
  }

  createDeviceDivs(props) {
    const { deviceName, color, orientation, children, transform } = props;

    const [selectedDevice] = availableDevices.filter(
      (eachDevice) => eachDevice.deviceName === deviceName
    );

    const newDimension = (value) => value * transform;

    //noinspection JSSuspiciousNameCombination
    const Div =
      orientation !== "landscape"
        ? {
            width: newDimension(selectedDevice.width),
            height: newDimension(selectedDevice.height),
          }
        : {
            width: newDimension(selectedDevice.height),
            height: newDimension(selectedDevice.width),
          };

    const divs = selectedDevice.content.map((each, index) =>
      each === "screen" ? (
        <div className={each} key={index} style={{ overflow: "hidden" }}>
          {children}
        </div>
      ) : (
        <div className={each} key={index} />
      )
    );

    return (
      <div style={{ width: Div.width, height: Div.height }}>
        <style>{`
          .marvel-base-device {
            display: inline-block;
            position: relative;
            box-sizing: content-box !important;
          }

          .screen {
            width: 100%;
            position: relative;
            height: 100%;
            color: white;
            z-index: 2;
            text-align: center;
            display: block;
            -webkit-border-radius: 1px;
            border-radius: 1px;
            -webkit-box-shadow: 0 0 0 3px #111;
            box-shadow: 0 0 0 3px #111;
          }

          .top-bar,
          .bottom-bar {
            height: 3px;
            background: black;
            width: 100%;
            display: block;
          }

          .middle-bar {
            width: 3px;
            height: 4px;
            top: 0px;
            left: 90px;
            background: black;
            position: absolute;
          }

          .marvel-base-device.iphone6 {
            width: 375px;
            height: 667px;
            padding: 105px 24px;
            background: #d9dbdc;
            -webkit-border-radius: 56px;
            border-radius: 56px;
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);
          }

          .marvel-base-device.iphone6:before {
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            position: absolute;
            top: 6px;
            content: "";
            left: 6px;
            -webkit-border-radius: 50px;
            border-radius: 50px;
            background: #f8f8f8;
            z-index: 1;
          }

          .marvel-base-device.iphone6:after {
            width: calc(100% - 16px);
            height: calc(100% - 16px);
            position: absolute;
            top: 8px;
            content: "";
            left: 8px;
            -webkit-border-radius: 48px;
            border-radius: 48px;
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #fff;
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #fff;
            z-index: 2;
          }

          .marvel-base-device.iphone6 .home {
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 68px;
            height: 68px;
            position: absolute;
            left: 50%;
            margin-left: -34px;
            bottom: 22px;
            z-index: 3;
            background: #303233;
            background: -moz-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              color-stop(0%, #303233),
              color-stop(50%, #b5b7b9),
              color-stop(69%, #f0f2f2),
              color-stop(100%, #303233)
            );
            background: -webkit-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: -o-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: -ms-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: linear-gradient(
              135deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#303233', endColorstr='#303233',GradientType=1 );
          }

          .marvel-base-device.iphone6 .home:before {
            background: #f8f8f8;
            position: absolute;
            content: "";
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            top: 4px;
            left: 4px;
          }

          .marvel-base-device.iphone6 .top-bar {
            height: 14px;
            background: #bfbfc0;
            position: absolute;
            top: 68px;
            left: 0;
          }
          .marvel-base-device.iphone6 .bottom-bar {
            height: 14px;
            background: #bfbfc0;
            position: absolute;
            bottom: 68px;
            left: 0;
          }
          .marvel-base-device.iphone6 .sleep {
            position: absolute;
            top: 190px;
            right: -4px;
            width: 4px;
            height: 66px;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
            background: #d9dbdc;
          }
          .marvel-base-device.iphone6 .volume {
            position: absolute;
            left: -4px;
            top: 188px;
            z-index: 0;
            height: 66px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: #d9dbdc;
          }
          .marvel-base-device.iphone6 .volume:before {
            position: absolute;
            left: 2px;
            top: -78px;
            height: 40px;
            width: 2px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone6 .volume:after {
            position: absolute;
            left: 0px;
            top: 82px;
            height: 66px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone6 .camera {
            background: #3c3d3d;
            width: 12px;
            height: 12px;
            position: absolute;
            top: 24px;
            left: 50%;
            margin-left: -6px;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            z-index: 3;
          }
          .marvel-base-device.iphone6 .sensor {
            background: #3c3d3d;
            width: 16px;
            height: 16px;
            position: absolute;
            top: 49px;
            left: 134px;
            z-index: 3;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.iphone6 .speaker {
            background: #292728;
            width: 70px;
            height: 6px;
            position: absolute;
            top: 54px;
            left: 50%;
            margin-left: -35px;
            -webkit-border-radius: 6px;
            border-radius: 6px;
            z-index: 3;
          }
          .marvel-base-device.iphone6.gold {
            background: #f9e7d3;
          }
          .marvel-base-device.iphone6.gold .top-bar,
          .marvel-base-device.iphone6.gold .bottom-bar {
            background: white;
          }
          .marvel-base-device.iphone6.gold .sleep,
          .marvel-base-device.iphone6.gold .volume {
            background: #f9e7d3;
          }
          .marvel-base-device.iphone6.gold .home {
            background: #cebba9;
            background: -moz-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              color-stop(0%, #cebba9),
              color-stop(50%, #f9e7d3),
              color-stop(100%, #cebba9)
            );
            background: -webkit-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: -o-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: -ms-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: linear-gradient(
              135deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cebba9', endColorstr='#cebba9',GradientType=1 );
          }
          .marvel-base-device.iphone6.black {
            background: #464646;
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.7);
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.7);
          }
          .marvel-base-device.iphone6.black:before {
            background: #080808;
          }
          .marvel-base-device.iphone6.black:after {
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #212121;
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #212121;
          }
          .marvel-base-device.iphone6.black .top-bar,
          .marvel-base-device.iphone6.black .bottom-bar {
            background: #212121;
          }
          .marvel-base-device.iphone6.black .volume,
          .marvel-base-device.iphone6.black .sleep {
            background: #464646;
          }
          .marvel-base-device.iphone6.black .camera {
            background: #080808;
          }
          .marvel-base-device.iphone6.black .home {
            background: #080808;
            background: -moz-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              color-stop(0%, #080808),
              color-stop(50%, #464646),
              color-stop(100%, #080808)
            );
            background: -webkit-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: -o-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: -ms-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: linear-gradient(
              135deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#080808', endColorstr='#080808',GradientType=1 );
          }
          .marvel-base-device.iphone6.black .home:before {
            background: #080808;
          }
          .marvel-base-device.iphone6.landscape {
            padding: 24px 105px;
            height: 375px;
            width: 667px;
          }
          .marvel-base-device.iphone6.landscape .sleep {
            top: 100%;
            -webkit-border-radius: 0px 0px 2px 2px;
            border-radius: 0px 0px 2px 2px;
            right: 190px;
            height: 4px;
            width: 66px;
          }
          .marvel-base-device.iphone6.landscape .volume {
            width: 66px;
            height: 4px;
            top: -4px;
            left: calc(100% - 188px - 66px);
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone6.landscape .volume:before {
            width: 40px;
            height: 2px;
            top: 2px;
            right: -78px;
            left: auto;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone6.landscape .volume:after {
            left: -82px;
            width: 66px;
            height: 4px;
            top: 0;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone6.landscape .top-bar {
            width: 14px;
            height: 100%;
            left: calc(100% - 68px - 14px);
            top: 0;
          }
          .marvel-base-device.iphone6.landscape .bottom-bar {
            width: 14px;
            height: 100%;
            left: 68px;
            top: 0;
          }
          .marvel-base-device.iphone6.landscape .home {
            top: 50%;
            margin-top: -34px;
            margin-left: 0;
            left: 22px;
          }
          .marvel-base-device.iphone6.landscape .sensor {
            top: 134px;
            left: calc(100% - 49px - 16px);
          }
          .marvel-base-device.iphone6.landscape .speaker {
            height: 70px;
            width: 6px;
            left: calc(100% - 54px - 6px);
            top: 50%;
            margin-left: 0px;
            margin-top: -35px;
          }
          .marvel-base-device.iphone6.landscape .camera {
            left: calc(100% - 32px);
            top: 50%;
            margin-left: 0px;
            margin-top: -5px;
          }
          .marvel-base-device.iphone6plus {
            width: 414px;
            height: 736px;
            padding: 112px 26px;
            background: #d9dbdc;
            -webkit-border-radius: 56px;
            border-radius: 56px;
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);
          }
          .marvel-base-device.iphone6plus:before {
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            position: absolute;
            top: 6px;
            content: "";
            left: 6px;
            -webkit-border-radius: 50px;
            border-radius: 50px;
            background: #f8f8f8;
            z-index: 1;
          }
          .marvel-base-device.iphone6plus:after {
            width: calc(100% - 16px);
            height: calc(100% - 16px);
            position: absolute;
            top: 8px;
            content: "";
            left: 8px;
            -webkit-border-radius: 48px;
            border-radius: 48px;
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #fff;
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #fff;
            z-index: 2;
          }
          .marvel-base-device.iphone6plus .home {
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 68px;
            height: 68px;
            position: absolute;
            left: 50%;
            margin-left: -34px;
            bottom: 24px;
            z-index: 3;
            background: #303233;
            background: -moz-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              color-stop(0%, #303233),
              color-stop(50%, #b5b7b9),
              color-stop(69%, #f0f2f2),
              color-stop(100%, #303233)
            );
            background: -webkit-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: -o-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: -ms-linear-gradient(
              -45deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            background: linear-gradient(
              135deg,
              #303233 0%,
              #b5b7b9 50%,
              #f0f2f2 69%,
              #303233 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#303233', endColorstr='#303233',GradientType=1 );
          }
          .marvel-base-device.iphone6plus .home:before {
            background: #f8f8f8;
            position: absolute;
            content: "";
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            top: 4px;
            left: 4px;
          }
          .marvel-base-device.iphone6plus .top-bar {
            height: 14px;
            background: #bfbfc0;
            position: absolute;
            top: 68px;
            left: 0;
          }
          .marvel-base-device.iphone6plus .bottom-bar {
            height: 14px;
            background: #bfbfc0;
            position: absolute;
            bottom: 68px;
            left: 0;
          }
          .marvel-base-device.iphone6plus .sleep {
            position: absolute;
            top: 190px;
            right: -4px;
            width: 4px;
            height: 66px;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
            background: #d9dbdc;
          }
          .marvel-base-device.iphone6plus .volume {
            position: absolute;
            left: -4px;
            top: 188px;
            z-index: 0;
            height: 66px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: #d9dbdc;
          }
          .marvel-base-device.iphone6plus .volume:before {
            position: absolute;
            left: 2px;
            top: -78px;
            height: 40px;
            width: 2px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone6plus .volume:after {
            position: absolute;
            left: 0px;
            top: 82px;
            height: 66px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone6plus .camera {
            background: #3c3d3d;
            width: 12px;
            height: 12px;
            position: absolute;
            top: 29px;
            left: 50%;
            margin-left: -6px;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            z-index: 3;
          }
          .marvel-base-device.iphone6plus .sensor {
            background: #3c3d3d;
            width: 16px;
            height: 16px;
            position: absolute;
            top: 54px;
            left: 154px;
            z-index: 3;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.iphone6plus .speaker {
            background: #292728;
            width: 70px;
            height: 6px;
            position: absolute;
            top: 59px;
            left: 50%;
            margin-left: -35px;
            -webkit-border-radius: 6px;
            border-radius: 6px;
            z-index: 3;
          }
          .marvel-base-device.iphone6plus.gold {
            background: #f9e7d3;
          }
          .marvel-base-device.iphone6plus.gold .top-bar,
          .marvel-base-device.iphone6plus.gold .bottom-bar {
            background: white;
          }
          .marvel-base-device.iphone6plus.gold .sleep,
          .marvel-base-device.iphone6plus.gold .volume {
            background: #f9e7d3;
          }
          .marvel-base-device.iphone6plus.gold .home {
            background: #cebba9;
            background: -moz-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              color-stop(0%, #cebba9),
              color-stop(50%, #f9e7d3),
              color-stop(100%, #cebba9)
            );
            background: -webkit-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: -o-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: -ms-linear-gradient(
              -45deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            background: linear-gradient(
              135deg,
              #cebba9 0%,
              #f9e7d3 50%,
              #cebba9 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cebba9', endColorstr='#cebba9',GradientType=1 );
          }
          .marvel-base-device.iphone6plus.black {
            background: #464646;
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.7);
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.7);
          }
          .marvel-base-device.iphone6plus.black:before {
            background: #080808;
          }
          .marvel-base-device.iphone6plus.black:after {
            -webkit-box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #212121;
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 6px 3px #212121;
          }
          .marvel-base-device.iphone6plus.black .top-bar,
          .marvel-base-device.iphone6plus.black .bottom-bar {
            background: #212121;
          }
          .marvel-base-device.iphone6plus.black .volume,
          .marvel-base-device.iphone6plus.black .sleep {
            background: #464646;
          }
          .marvel-base-device.iphone6plus.black .camera {
            background: #080808;
          }
          .marvel-base-device.iphone6plus.black .home {
            background: #080808;
            background: -moz-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              color-stop(0%, #080808),
              color-stop(50%, #464646),
              color-stop(100%, #080808)
            );
            background: -webkit-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: -o-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: -ms-linear-gradient(
              -45deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            background: linear-gradient(
              135deg,
              #080808 0%,
              #464646 50%,
              #080808 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#080808', endColorstr='#080808',GradientType=1 );
          }
          .marvel-base-device.iphone6plus.black .home:before {
            background: #080808;
          }
          .marvel-base-device.iphone6plus.landscape {
            padding: 26px 112px;
            height: 414px;
            width: 736px;
          }
          .marvel-base-device.iphone6plus.landscape .sleep {
            top: 100%;
            -webkit-border-radius: 0px 0px 2px 2px;
            border-radius: 0px 0px 2px 2px;
            right: 190px;
            height: 4px;
            width: 66px;
          }
          .marvel-base-device.iphone6plus.landscape .volume {
            width: 66px;
            height: 4px;
            top: -4px;
            left: calc(100% - 188px - 66px);
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone6plus.landscape .volume:before {
            width: 40px;
            height: 2px;
            top: 2px;
            right: -78px;
            left: auto;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone6plus.landscape .volume:after {
            left: -82px;
            width: 66px;
            height: 4px;
            top: 0;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone6plus.landscape .top-bar {
            width: 14px;
            height: 100%;
            left: calc(100% - 68px - 14px);
            top: 0;
          }
          .marvel-base-device.iphone6plus.landscape .bottom-bar {
            width: 14px;
            height: 100%;
            left: 68px;
            top: 0;
          }
          .marvel-base-device.iphone6plus.landscape .home {
            top: 50%;
            margin-top: -34px;
            margin-left: 0;
            left: 24px;
          }
          .marvel-base-device.iphone6plus.landscape .sensor {
            top: 154px;
            left: calc(100% - 54px - 16px);
          }
          .marvel-base-device.iphone6plus.landscape .speaker {
            height: 70px;
            width: 6px;
            left: calc(100% - 59px - 6px);
            top: 50%;
            margin-left: 0px;
            margin-top: -35px;
          }
          .marvel-base-device.iphone6plus.landscape .camera {
            left: calc(100% - 29px);
            top: 50%;
            margin-left: 0px;
            margin-top: -5px;
          }
          .marvel-base-device.iphone5s,
          .marvel-base-device.iphone5c {
            padding: 105px 22px;
            background: #2c2b2c;
            width: 320px;
            height: 568px;
            -webkit-border-radius: 50px;
            border-radius: 50px;
          }
          .marvel-base-device.iphone5s:before,
          .marvel-base-device.iphone5c:before {
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            position: absolute;
            top: 4px;
            content: "";
            left: 4px;
            -webkit-border-radius: 46px;
            border-radius: 46px;
            background: #1e1e1e;
            z-index: 1;
          }
          .marvel-base-device.iphone5s .sleep,
          .marvel-base-device.iphone5c .sleep {
            position: absolute;
            top: -4px;
            right: 60px;
            width: 60px;
            height: 4px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
            background: #282727;
          }
          .marvel-base-device.iphone5s .volume,
          .marvel-base-device.iphone5c .volume {
            position: absolute;
            left: -4px;
            top: 180px;
            z-index: 0;
            height: 27px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: #282727;
          }
          .marvel-base-device.iphone5s .volume:before,
          .marvel-base-device.iphone5c .volume:before {
            position: absolute;
            left: 0px;
            top: -75px;
            height: 35px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone5s .volume:after,
          .marvel-base-device.iphone5c .volume:after {
            position: absolute;
            left: 0px;
            bottom: -64px;
            height: 27px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone5s .camera,
          .marvel-base-device.iphone5c .camera {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 32px;
            left: 50%;
            margin-left: -5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            z-index: 3;
          }
          .marvel-base-device.iphone5s .sensor,
          .marvel-base-device.iphone5c .sensor {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 60px;
            left: 160px;
            z-index: 3;
            margin-left: -32px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
          }
          .marvel-base-device.iphone5s .speaker,
          .marvel-base-device.iphone5c .speaker {
            background: #292728;
            width: 64px;
            height: 10px;
            position: absolute;
            top: 60px;
            left: 50%;
            margin-left: -32px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            z-index: 3;
          }
          .marvel-base-device.iphone5s.landscape,
          .marvel-base-device.iphone5c.landscape {
            padding: 22px 105px;
            height: 320px;
            width: 568px;
          }
          .marvel-base-device.iphone5s.landscape .sleep,
          .marvel-base-device.iphone5c.landscape .sleep {
            right: -4px;
            top: calc(100% - 120px);
            height: 60px;
            width: 4px;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
          }
          .marvel-base-device.iphone5s.landscape .volume,
          .marvel-base-device.iphone5c.landscape .volume {
            width: 27px;
            height: 4px;
            top: -4px;
            left: calc(100% - 180px);
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone5s.landscape .volume:before,
          .marvel-base-device.iphone5c.landscape .volume:before {
            width: 35px;
            height: 4px;
            top: 0px;
            right: -75px;
            left: auto;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone5s.landscape .volume:after,
          .marvel-base-device.iphone5c.landscape .volume:after {
            bottom: 0px;
            left: -64px;
            z-index: 999;
            height: 4px;
            width: 27px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone5s.landscape .sensor,
          .marvel-base-device.iphone5c.landscape .sensor {
            top: 160px;
            left: calc(100% - 60px);
            margin-left: 0px;
            margin-top: -32px;
          }
          .marvel-base-device.iphone5s.landscape .speaker,
          .marvel-base-device.iphone5c.landscape .speaker {
            height: 64px;
            width: 10px;
            left: calc(100% - 60px);
            top: 50%;
            margin-left: 0px;
            margin-top: -32px;
          }
          .marvel-base-device.iphone5s.landscape .camera,
          .marvel-base-device.iphone5c.landscape .camera {
            left: calc(100% - 32px);
            top: 50%;
            margin-left: 0px;
            margin-top: -5px;
          }
          .marvel-base-device.iphone5s .home {
            -moz-border-radius: 36px;
            -webkit-border-radius: 36px;
            border-radius: 36px;
            width: 68px;
            -webkit-box-shadow: inset 0 0 0 4px #2c2b2c;
            box-shadow: inset 0 0 0 4px #2c2b2c;
            height: 68px;
            position: absolute;
            left: 50%;
            margin-left: -34px;
            bottom: 19px;
            z-index: 3;
          }
          .marvel-base-device.iphone5s .top-bar {
            top: 70px;
            position: absolute;
            left: 0;
          }
          .marvel-base-device.iphone5s .bottom-bar {
            bottom: 70px;
            position: absolute;
            left: 0;
          }
          .marvel-base-device.iphone5s.landscape .home {
            left: 19px;
            bottom: 50%;
            margin-bottom: -34px;
            margin-left: 0px;
          }
          .marvel-base-device.iphone5s.landscape .top-bar {
            left: 70px;
            top: 0px;
            width: 3px;
            height: 100%;
          }
          .marvel-base-device.iphone5s.landscape .bottom-bar {
            right: 70px;
            left: auto;
            bottom: 0px;
            width: 3px;
            height: 100%;
          }
          .marvel-base-device.iphone5s.silver {
            background: #bcbcbc;
          }
          .marvel-base-device.iphone5s.silver:before {
            background: #fcfcfc;
          }
          .marvel-base-device.iphone5s.silver .volume,
          .marvel-base-device.iphone5s.silver .sleep {
            background: #d6d6d6;
          }
          .marvel-base-device.iphone5s.silver .top-bar,
          .marvel-base-device.iphone5s.silver .bottom-bar {
            background: #eaebec;
          }
          .marvel-base-device.iphone5s.silver .home {
            -webkit-box-shadow: inset 0 0 0 4px #bcbcbc;
            box-shadow: inset 0 0 0 4px #bcbcbc;
          }
          .marvel-base-device.iphone5s.gold {
            background: #f9e7d3;
          }
          .marvel-base-device.iphone5s.gold:before {
            background: #fcfcfc;
          }
          .marvel-base-device.iphone5s.gold .volume,
          .marvel-base-device.iphone5s.gold .sleep {
            background: #f9e7d3;
          }
          .marvel-base-device.iphone5s.gold .top-bar,
          .marvel-base-device.iphone5s.gold .bottom-bar {
            background: white;
          }
          .marvel-base-device.iphone5s.gold .home {
            -webkit-box-shadow: inset 0 0 0 4px #f9e7d3;
            box-shadow: inset 0 0 0 4px #f9e7d3;
          }
          .marvel-base-device.iphone5c {
            background: white;
            -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          }
          .marvel-base-device.iphone5c .top-bar,
          .marvel-base-device.iphone5c .bottom-bar {
            display: none;
          }
          .marvel-base-device.iphone5c .home {
            background: #242324;
            -moz-border-radius: 36px;
            -webkit-border-radius: 36px;
            border-radius: 36px;
            width: 68px;
            height: 68px;
            z-index: 3;
            position: absolute;
            left: 50%;
            margin-left: -34px;
            bottom: 19px;
          }
          .marvel-base-device.iphone5c .home:after {
            width: 20px;
            height: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            border-radius: 4px;
            position: absolute;
            display: block;
            content: "";
            top: 50%;
            left: 50%;
            margin-top: -11px;
            margin-left: -11px;
          }
          .marvel-base-device.iphone5c.landscape .home {
            left: 19px;
            bottom: 50%;
            margin-bottom: -34px;
            margin-left: 0px;
          }
          .marvel-base-device.iphone5c .volume,
          .marvel-base-device.iphone5c .sleep {
            background: #dddddd;
          }
          .marvel-base-device.iphone5c.red {
            background: #f96b6c;
          }
          .marvel-base-device.iphone5c.red .volume,
          .marvel-base-device.iphone5c.red .sleep {
            background: #ed5758;
          }
          .marvel-base-device.iphone5c.yellow {
            background: #f2dc60;
          }
          .marvel-base-device.iphone5c.yellow .volume,
          .marvel-base-device.iphone5c.yellow .sleep {
            background: #e5ce4c;
          }
          .marvel-base-device.iphone5c.green {
            background: #97e563;
          }
          .marvel-base-device.iphone5c.green .volume,
          .marvel-base-device.iphone5c.green .sleep {
            background: #85d94d;
          }
          .marvel-base-device.iphone5c.blue {
            background: #33a2db;
          }
          .marvel-base-device.iphone5c.blue .volume,
          .marvel-base-device.iphone5c.blue .sleep {
            background: #2694cd;
          }
          .marvel-base-device.iphone4s {
            padding: 129px 27px;
            width: 320px;
            height: 480px;
            background: #686868;
            -webkit-border-radius: 54px;
            border-radius: 54px;
          }
          .marvel-base-device.iphone4s:before {
            content: "";
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            position: absolute;
            top: 4px;
            left: 4px;
            z-index: 1;
            -webkit-border-radius: 50px;
            border-radius: 50px;
            background: #1e1e1e;
          }
          .marvel-base-device.iphone4s .top-bar {
            top: 60px;
            position: absolute;
            left: 0;
          }
          .marvel-base-device.iphone4s .bottom-bar {
            bottom: 90px;
            position: absolute;
            left: 0;
          }
          .marvel-base-device.iphone4s .camera {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 72px;
            left: 134px;
            z-index: 3;
            margin-left: -5px;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.iphone4s .speaker {
            background: #292728;
            width: 64px;
            height: 10px;
            position: absolute;
            top: 72px;
            left: 50%;
            z-index: 3;
            margin-left: -32px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
          }
          .marvel-base-device.iphone4s .sensor {
            background: #292728;
            width: 40px;
            height: 10px;
            position: absolute;
            top: 36px;
            left: 50%;
            z-index: 3;
            margin-left: -20px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
          }
          .marvel-base-device.iphone4s .home {
            background: #242324;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 72px;
            height: 72px;
            z-index: 3;
            position: absolute;
            left: 50%;
            margin-left: -36px;
            bottom: 30px;
          }
          .marvel-base-device.iphone4s .home:after {
            width: 20px;
            height: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            -webkit-border-radius: 4px;
            border-radius: 4px;
            position: absolute;
            display: block;
            content: "";
            top: 50%;
            left: 50%;
            margin-top: -11px;
            margin-left: -11px;
          }
          .marvel-base-device.iphone4s .sleep {
            position: absolute;
            top: -4px;
            right: 60px;
            width: 60px;
            height: 4px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
            background: #4d4d4d;
          }
          .marvel-base-device.iphone4s .volume {
            position: absolute;
            left: -4px;
            top: 160px;
            height: 27px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: #4d4d4d;
          }
          .marvel-base-device.iphone4s .volume:before {
            position: absolute;
            left: 0px;
            top: -70px;
            height: 35px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone4s .volume:after {
            position: absolute;
            left: 0px;
            bottom: -64px;
            height: 27px;
            width: 4px;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
            background: inherit;
            content: "";
            display: block;
          }
          .marvel-base-device.iphone4s.landscape {
            padding: 27px 129px;
            height: 320px;
            width: 480px;
          }
          .marvel-base-device.iphone4s.landscape .bottom-bar {
            left: 90px;
            bottom: 0px;
            height: 100%;
            width: 3px;
          }
          .marvel-base-device.iphone4s.landscape .top-bar {
            left: calc(100% - 60px);
            top: 0px;
            height: 100%;
            width: 3px;
          }
          .marvel-base-device.iphone4s.landscape .camera {
            top: 134px;
            left: calc(100% - 72px);
            margin-left: 0;
          }
          .marvel-base-device.iphone4s.landscape .speaker {
            top: 50%;
            margin-left: 0;
            margin-top: -32px;
            left: calc(100% - 72px);
            width: 10px;
            height: 64px;
          }
          .marvel-base-device.iphone4s.landscape .sensor {
            height: 40px;
            width: 10px;
            left: calc(100% - 36px);
            top: 50%;
            margin-left: 0;
            margin-top: -20px;
          }
          .marvel-base-device.iphone4s.landscape .home {
            left: 30px;
            bottom: 50%;
            margin-left: 0;
            margin-bottom: -36px;
          }
          .marvel-base-device.iphone4s.landscape .sleep {
            height: 60px;
            width: 4px;
            right: -4px;
            top: calc(100% - 120px);
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
          }
          .marvel-base-device.iphone4s.landscape .volume {
            top: -4px;
            left: calc(100% - 187px);
            height: 4px;
            width: 27px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone4s.landscape .volume:before {
            right: -70px;
            left: auto;
            top: 0px;
            width: 35px;
            height: 4px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone4s.landscape .volume:after {
            width: 27px;
            height: 4px;
            bottom: 0px;
            left: -64px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.iphone4s.silver {
            background: #bcbcbc;
          }
          .marvel-base-device.iphone4s.silver:before {
            background: #fcfcfc;
          }
          .marvel-base-device.iphone4s.silver .home {
            background: #fcfcfc;
            -webkit-box-shadow: inset 0 0 0 1px #bcbcbc;
            box-shadow: inset 0 0 0 1px #bcbcbc;
          }
          .marvel-base-device.iphone4s.silver .home:after {
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          .marvel-base-device.iphone4s.silver .volume,
          .marvel-base-device.iphone4s.silver .sleep {
            background: #d6d6d6;
          }
          .marvel-base-device.nexus5 {
            padding: 50px 15px 50px 15px;
            width: 320px;
            height: 568px;
            background: #1e1e1e;
            -webkit-border-radius: 20px;
            border-radius: 20px;
          }
          .marvel-base-device.nexus5:before {
            -webkit-border-radius: 600px / 50px;
            border-radius: 600px / 50px;
            background: inherit;
            content: "";
            top: 0;
            position: absolute;
            height: 103.1%;
            width: calc(100% - 26px);
            top: 50%;
            left: 50%;
            -moz-transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
            -o-transform: translateX(-50%) translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
          }
          .marvel-base-device.nexus5 .top-bar {
            width: calc(100% - 8px);
            height: calc(100% - 6px);
            position: absolute;
            top: 3px;
            left: 4px;
            -webkit-border-radius: 20px;
            border-radius: 20px;
            background: #181818;
          }
          .marvel-base-device.nexus5 .top-bar:before {
            -webkit-border-radius: 600px / 50px;
            border-radius: 600px / 50px;
            background: inherit;
            content: "";
            top: 0;
            position: absolute;
            height: 103%;
            width: calc(100% - 26px);
            top: 50%;
            left: 50%;
            -moz-transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
            -o-transform: translateX(-50%) translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
          }
          .marvel-base-device.nexus5 .bottom-bar {
            display: none;
          }
          .marvel-base-device.nexus5 .sleep {
            width: 3px;
            position: absolute;
            left: -3px;
            top: 110px;
            height: 100px;
            background: inherit;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
          }
          .marvel-base-device.nexus5 .volume {
            width: 3px;
            position: absolute;
            right: -3px;
            top: 70px;
            height: 45px;
            background: inherit;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
          }
          .marvel-base-device.nexus5 .camera {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 18px;
            left: 50%;
            z-index: 3;
            margin-left: -5px;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.nexus5 .camera:before {
            background: #3c3d3d;
            width: 6px;
            height: 6px;
            content: "";
            display: block;
            position: absolute;
            top: 2px;
            left: -100px;
            z-index: 3;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.nexus5.landscape {
            padding: 15px 50px 15px 50px;
            height: 320px;
            width: 568px;
          }
          .marvel-base-device.nexus5.landscape:before {
            width: 103.1%;
            height: calc(100% - 26px);
            -webkit-border-radius: 50px / 600px;
            border-radius: 50px / 600px;
          }
          .marvel-base-device.nexus5.landscape .top-bar {
            left: 3px;
            top: 4px;
            height: calc(100% - 8px);
            width: calc(100% - 6px);
          }
          .marvel-base-device.nexus5.landscape .top-bar:before {
            width: 103%;
            height: calc(100% - 26px);
            -webkit-border-radius: 50px / 600px;
            border-radius: 50px / 600px;
          }
          .marvel-base-device.nexus5.landscape .sleep {
            height: 3px;
            width: 100px;
            left: calc(100% - 210px);
            top: -3px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.nexus5.landscape .volume {
            height: 3px;
            width: 45px;
            right: 70px;
            top: 100%;
            -webkit-border-radius: 0px 0px 2px 2px;
            border-radius: 0px 0px 2px 2px;
          }
          .marvel-base-device.nexus5.landscape .camera {
            top: 50%;
            left: calc(100% - 18px);
            margin-left: 0;
            margin-top: -5px;
          }
          .marvel-base-device.nexus5.landscape .camera:before {
            top: -100px;
            left: 2px;
          }
          .marvel-base-device.s5 {
            padding: 60px 18px;
            -webkit-border-radius: 42px;
            border-radius: 42px;
            width: 320px;
            height: 568px;
            background: #bcbcbc;
          }
          .marvel-base-device.s5:before,
          .marvel-base-device.s5:after {
            width: calc(100% - 52px);
            content: "";
            display: block;
            height: 26px;
            background: inherit;
            position: absolute;
            -webkit-border-radius: 500px / 40px;
            border-radius: 500px / 40px;
            left: 50%;
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
          }
          .marvel-base-device.s5:before {
            top: -7px;
          }
          .marvel-base-device.s5:after {
            bottom: -7px;
          }
          .marvel-base-device.s5 .bottom-bar {
            display: none;
          }
          .marvel-base-device.s5 .top-bar {
            -webkit-border-radius: 37px;
            border-radius: 37px;
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            top: 5px;
            left: 5px;
            background: radial-gradient(
                  rgba(0, 0, 0, 0.02) 20%,
                  transparent 60%
                )
                0 0,
              radial-gradient(rgba(0, 0, 0, 0.02) 20%, transparent 60%) 3px 3px;
            background-color: white;
            background-size: 4px 4px;
            background-position: center;
            z-index: 2;
            position: absolute;
          }
          .marvel-base-device.s5 .top-bar:before,
          .marvel-base-device.s5 .top-bar:after {
            width: calc(100% - 48px);
            content: "";
            display: block;
            height: 26px;
            background: inherit;
            position: absolute;
            -webkit-border-radius: 500px / 40px;
            border-radius: 500px / 40px;
            left: 50%;
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
          }
          .marvel-base-device.s5 .top-bar:before {
            top: -7px;
          }
          .marvel-base-device.s5 .top-bar:after {
            bottom: -7px;
          }
          .marvel-base-device.s5 .sleep {
            width: 3px;
            position: absolute;
            left: -3px;
            top: 100px;
            height: 100px;
            background: #cecece;
            -webkit-border-radius: 2px 0px 0px 2px;
            border-radius: 2px 0px 0px 2px;
          }
          .marvel-base-device.s5 .speaker {
            width: 68px;
            height: 8px;
            position: absolute;
            top: 20px;
            display: block;
            z-index: 3;
            left: 50%;
            margin-left: -34px;
            background-color: #bcbcbc;
            background-position: top left;
            -webkit-border-radius: 4px;
            border-radius: 4px;
          }
          .marvel-base-device.s5 .sensor {
            display: block;
            position: absolute;
            top: 20px;
            right: 110px;
            background: #3c3d3d;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 8px;
            height: 8px;
            z-index: 3;
          }
          .marvel-base-device.s5 .sensor:after {
            display: block;
            content: "";
            position: absolute;
            top: 0px;
            right: 12px;
            background: #3c3d3d;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 8px;
            height: 8px;
            z-index: 3;
          }
          .marvel-base-device.s5 .camera {
            display: block;
            position: absolute;
            top: 24px;
            right: 42px;
            background: black;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 10px;
            height: 10px;
            z-index: 3;
          }
          .marvel-base-device.s5 .camera:before {
            width: 4px;
            height: 4px;
            background: #3c3d3d;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            margin-top: -2px;
            margin-left: -2px;
          }
          .marvel-base-device.s5 .home {
            position: absolute;
            z-index: 3;
            bottom: 17px;
            left: 50%;
            width: 70px;
            height: 20px;
            background: white;
            -webkit-border-radius: 18px;
            border-radius: 18px;
            display: block;
            margin-left: -35px;
            border: 2px solid black;
          }
          .marvel-base-device.s5.landscape {
            padding: 18px 60px;
            height: 320px;
            width: 568px;
          }
          .marvel-base-device.s5.landscape:before,
          .marvel-base-device.s5.landscape:after {
            height: calc(100% - 52px);
            width: 26px;
            -webkit-border-radius: 40px / 500px;
            border-radius: 40px / 500px;
            -moz-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }
          .marvel-base-device.s5.landscape:before {
            top: 50%;
            left: -7px;
          }
          .marvel-base-device.s5.landscape:after {
            top: 50%;
            left: auto;
            right: -7px;
          }
          .marvel-base-device.s5.landscape .top-bar:before,
          .marvel-base-device.s5.landscape .top-bar:after {
            width: 26px;
            height: calc(100% - 48px);
            -webkit-border-radius: 40px / 500px;
            border-radius: 40px / 500px;
            -moz-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }
          .marvel-base-device.s5.landscape .top-bar:before {
            right: -7px;
            top: 50%;
            left: auto;
          }
          .marvel-base-device.s5.landscape .top-bar:after {
            left: -7px;
            top: 50%;
            right: auto;
          }
          .marvel-base-device.s5.landscape .sleep {
            height: 3px;
            width: 100px;
            left: calc(100% - 200px);
            top: -3px;
            -webkit-border-radius: 2px 2px 0px 0px;
            border-radius: 2px 2px 0px 0px;
          }
          .marvel-base-device.s5.landscape .speaker {
            height: 68px;
            width: 8px;
            left: calc(100% - 20px);
            top: 50%;
            margin-left: 0;
            margin-top: -34px;
          }
          .marvel-base-device.s5.landscape .sensor {
            right: 20px;
            top: calc(100% - 110px);
          }
          .marvel-base-device.s5.landscape .sensor:after {
            left: -12px;
            right: 0px;
          }
          .marvel-base-device.s5.landscape .camera {
            top: calc(100% - 42px);
            right: 24px;
          }
          .marvel-base-device.s5.landscape .home {
            width: 20px;
            height: 70px;
            bottom: 50%;
            margin-bottom: -35px;
            margin-left: 0;
            left: 17px;
          }
          .marvel-base-device.s5.black {
            background: #1e1e1e;
          }
          .marvel-base-device.s5.black .speaker {
            background: black;
          }
          .marvel-base-device.s5.black .sleep {
            background: #1e1e1e;
          }
          .marvel-base-device.s5.black .top-bar {
            background: radial-gradient(
                  rgba(0, 0, 0, 0.05) 20%,
                  transparent 60%
                )
                0 0,
              radial-gradient(rgba(0, 0, 0, 0.05) 20%, transparent 60%) 3px 3px;
            background-color: #2c2b2c;
            background-size: 4px 4px;
          }
          .marvel-base-device.s5.black .home {
            background: #2c2b2c;
          }
          .marvel-base-device.lumia920 {
            padding: 80px 35px 125px 35px;
            background: #ffdd00;
            width: 320px;
            height: 533px;
            -moz-border-radius: 40px / 3px;
            -webkit-border-radius: 40px / 3px;
            border-radius: 40px / 3px;
          }
          .marvel-base-device.lumia920 .bottom-bar {
            display: none;
          }
          .marvel-base-device.lumia920 .top-bar {
            width: calc(100% - 24px);
            height: calc(100% - 32px);
            position: absolute;
            top: 16px;
            left: 12px;
            -moz-border-radius: 24px;
            -webkit-border-radius: 24px;
            border-radius: 24px;
            background: black;
            z-index: 1;
          }
          .marvel-base-device.lumia920 .top-bar:before {
            background: #1e1e1e;
            display: block;
            content: "";
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            top: 2px;
            left: 2px;
            position: absolute;
            -moz-border-radius: 22px;
            -webkit-border-radius: 22px;
            border-radius: 22px;
          }
          .marvel-base-device.lumia920 .volume {
            width: 3px;
            position: absolute;
            top: 130px;
            height: 100px;
            background: #1e1e1e;
            right: -3px;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
          }
          .marvel-base-device.lumia920 .volume:before {
            width: 3px;
            position: absolute;
            top: 190px;
            content: "";
            display: block;
            height: 50px;
            background: inherit;
            right: 0px;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
          }
          .marvel-base-device.lumia920 .volume:after {
            width: 3px;
            position: absolute;
            top: 460px;
            content: "";
            display: block;
            height: 50px;
            background: inherit;
            right: 0px;
            -webkit-border-radius: 0px 2px 2px 0px;
            border-radius: 0px 2px 2px 0px;
          }
          .marvel-base-device.lumia920 .camera {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 34px;
            right: 130px;
            z-index: 5;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
          }
          .marvel-base-device.lumia920 .speaker {
            background: #292728;
            width: 64px;
            height: 10px;
            position: absolute;
            top: 38px;
            left: 50%;
            margin-left: -32px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            z-index: 3;
          }
          .marvel-base-device.lumia920.landscape {
            padding: 35px 80px 35px 125px;
            height: 320px;
            width: 568px;
            -moz-border-radius: 2px / 100px;
            -webkit-border-radius: 2px / 100px;
            border-radius: 2px / 100px;
          }
          .marvel-base-device.lumia920.landscape .top-bar {
            height: calc(100% - 24px);
            width: calc(100% - 32px);
            left: 16px;
            top: 12px;
          }
          .marvel-base-device.lumia920.landscape .volume {
            height: 3px;
            right: 130px;
            width: 100px;
            top: 100%;
            -webkit-border-radius: 0px 0px 2px 2px;
            border-radius: 0px 0px 2px 2px;
          }
          .marvel-base-device.lumia920.landscape .volume:before {
            height: 3px;
            right: 190px;
            top: 0px;
            width: 50px;
            -webkit-border-radius: 0px 0px 2px 2px;
            border-radius: 0px 0px 2px 2px;
          }
          .marvel-base-device.lumia920.landscape .volume:after {
            height: 3px;
            right: 430px;
            top: 0px;
            width: 50px;
            -webkit-border-radius: 0px 0px 2px 2px;
            border-radius: 0px 0px 2px 2px;
          }
          .marvel-base-device.lumia920.landscape .camera {
            right: 30px;
            top: calc(100% - 140px);
          }
          .marvel-base-device.lumia920.landscape .speaker {
            width: 10px;
            height: 64px;
            top: 50%;
            margin-left: 0;
            margin-top: -32px;
            left: calc(100% - 48px);
          }
          .marvel-base-device.lumia920.black {
            background: black;
          }
          .marvel-base-device.lumia920.white {
            background: white;
            -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          }
          .marvel-base-device.lumia920.blue {
            background: #00acdd;
          }
          .marvel-base-device.lumia920.red {
            background: #cc3e32;
          }
          .marvel-base-device.htc-one {
            padding: 72px 25px 100px 25px;
            width: 320px;
            height: 568px;
            background: #bebebe;
            -webkit-border-radius: 34px;
            border-radius: 34px;
          }
          .marvel-base-device.htc-one:before {
            content: "";
            display: block;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            position: absolute;
            top: 2px;
            left: 2px;
            background: #adadad;
            -webkit-border-radius: 32px;
            border-radius: 32px;
          }
          .marvel-base-device.htc-one:after {
            content: "";
            display: block;
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            position: absolute;
            top: 4px;
            left: 4px;
            background: #eeeeee;
            -webkit-border-radius: 30px;
            border-radius: 30px;
          }
          .marvel-base-device.htc-one .top-bar {
            width: calc(100% - 4px);
            height: 635px;
            position: absolute;
            background: #424242;
            top: 50px;
            z-index: 1;
            left: 2px;
          }
          .marvel-base-device.htc-one .top-bar:before {
            content: "";
            position: absolute;
            width: calc(100% - 4px);
            height: 100%;
            position: absolute;
            background: black;
            top: 0px;
            z-index: 1;
            left: 2px;
          }
          .marvel-base-device.htc-one .bottom-bar {
            display: none;
          }
          .marvel-base-device.htc-one .speaker {
            height: 16px;
            width: 216px;
            display: block;
            position: absolute;
            top: 22px;
            z-index: 2;
            left: 50%;
            margin-left: -108px;
            background: radial-gradient(#343434 25%, transparent 50%) 0 0,
              radial-gradient(#343434 25%, transparent 50%) 4px 4px;
            background-size: 4px 4px;
            background-position: top left;
          }
          .marvel-base-device.htc-one .speaker:after {
            content: "";
            height: 16px;
            width: 216px;
            display: block;
            position: absolute;
            top: 676px;
            z-index: 2;
            left: 50%;
            margin-left: -108px;
            background: inherit;
          }
          .marvel-base-device.htc-one .camera {
            display: block;
            position: absolute;
            top: 18px;
            right: 38px;
            background: #3c3d3d;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 24px;
            height: 24px;
            z-index: 3;
          }
          .marvel-base-device.htc-one .camera:before {
            width: 8px;
            height: 8px;
            background: black;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            margin-top: -4px;
            margin-left: -4px;
          }
          .marvel-base-device.htc-one .sensor {
            display: block;
            position: absolute;
            top: 29px;
            left: 60px;
            background: #3c3d3d;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 8px;
            height: 8px;
            z-index: 3;
          }
          .marvel-base-device.htc-one .sensor:after {
            display: block;
            content: "";
            position: absolute;
            top: 0px;
            right: 12px;
            background: #3c3d3d;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            width: 8px;
            height: 8px;
            z-index: 3;
          }
          .marvel-base-device.htc-one.landscape {
            padding: 25px 72px 25px 100px;
            height: 320px;
            width: 568px;
          }
          .marvel-base-device.htc-one.landscape .top-bar {
            height: calc(100% - 4px);
            width: 635px;
            left: calc(100% - 685px);
            top: 2px;
          }
          .marvel-base-device.htc-one.landscape .speaker {
            width: 16px;
            height: 216px;
            left: calc(100% - 38px);
            top: 50%;
            margin-left: 0px;
            margin-top: -108px;
          }
          .marvel-base-device.htc-one.landscape .speaker:after {
            width: 16px;
            height: 216px;
            left: calc(100% - 692px);
            top: 50%;
            margin-left: 0;
            margin-top: -108px;
          }
          .marvel-base-device.htc-one.landscape .camera {
            right: 18px;
            top: calc(100% - 38px);
          }
          .marvel-base-device.htc-one.landscape .sensor {
            left: calc(100% - 29px);
            top: 60px;
          }
          .marvel-base-device.htc-one.landscape .sensor :after {
            right: 0;
            top: -12px;
          }
          .marvel-base-device.ipad {
            width: 576px;
            height: 768px;
            padding: 90px 25px;
            background: #242324;
            -webkit-border-radius: 44px;
            border-radius: 44px;
          }
          .marvel-base-device.ipad:before {
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            position: absolute;
            content: "";
            display: block;
            top: 4px;
            left: 4px;
            -webkit-border-radius: 40px;
            border-radius: 40px;
            background: #1e1e1e;
          }
          .marvel-base-device.ipad .camera {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 44px;
            left: 50%;
            margin-left: -5px;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.ipad .top-bar,
          .marvel-base-device.ipad .bottom-bar {
            display: none;
          }
          .marvel-base-device.ipad .home {
            background: #242324;
            -webkit-border-radius: 36px;
            border-radius: 36px;
            width: 50px;
            height: 50px;
            position: absolute;
            left: 50%;
            margin-left: -25px;
            bottom: 22px;
          }
          .marvel-base-device.ipad .home:after {
            width: 15px;
            height: 15px;
            margin-top: -8px;
            margin-left: -8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            -webkit-border-radius: 4px;
            border-radius: 4px;
            position: absolute;
            display: block;
            content: "";
            top: 50%;
            left: 50%;
          }
          .marvel-base-device.ipad.landscape {
            height: 576px;
            width: 768px;
            padding: 25px 90px;
          }
          .marvel-base-device.ipad.landscape .camera {
            left: calc(100% - 44px);
            top: 50%;
            margin-left: 0;
            margin-top: -5px;
          }
          .marvel-base-device.ipad.landscape .home {
            top: 50%;
            left: 22px;
            margin-left: 0;
            margin-top: -25px;
          }
          .marvel-base-device.ipad.silver {
            background: #bcbcbc;
          }
          .marvel-base-device.ipad.silver:before {
            background: #fcfcfc;
          }
          .marvel-base-device.ipad.silver .home {
            background: #fcfcfc;
            -webkit-box-shadow: inset 0 0 0 1px #bcbcbc;
            box-shadow: inset 0 0 0 1px #bcbcbc;
          }
          .marvel-base-device.ipad.silver .home:after {
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          .marvel-base-device.macbook {
            width: 960px;
            height: 600px;
            padding: 44px 44px 76px;
            margin: 0 auto;
            background: #bebebe;
            -webkit-border-radius: 34px;
            border-radius: 34px;
          }
          .marvel-base-device.macbook:before {
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            position: absolute;
            content: "";
            display: block;
            top: 4px;
            left: 4px;
            -webkit-border-radius: 30px;
            border-radius: 30px;
            background: #1e1e1e;
          }
          .marvel-base-device.macbook .top-bar {
            width: calc(100% + 2 * 70px);
            height: 40px;
            position: absolute;
            content: "";
            display: block;
            top: 680px;
            left: -70px;
            border-bottom-left-radius: 90px 18px;
            border-bottom-right-radius: 90px 18px;
            background: #bebebe;
            -webkit-box-shadow: inset 0px -4px 13px 3px rgba(34, 34, 34, 0.6);
            -moz-box-shadow: inset 0px -4px 13px 3px rgba(34, 34, 34, 0.6);
            box-shadow: inset 0px -4px 13px 3px rgba(34, 34, 34, 0.6);
          }
          .marvel-base-device.macbook .top-bar:before {
            width: 100%;
            height: 24px;
            content: "";
            display: block;
            top: 0;
            left: 0;
            background: #f0f0f0;
            border-bottom: 2px solid #aaa;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            position: relative;
          }
          .marvel-base-device.macbook .top-bar:after {
            width: 16%;
            height: 14px;
            content: "";
            display: block;
            top: 0;
            background: #ddd;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            -webkit-border-radius: 0 0 20px 20px;
            border-radius: 0 0 20px 20px;
            -webkit-box-shadow: inset 0px -3px 10px #999;
            -moz-box-shadow: inset 0px -3px 10px #999;
            box-shadow: inset 0px -3px 10px #999;
          }
          .marvel-base-device.macbook .bottom-bar {
            background: transparent;
            width: calc(100% + 2 * 70px);
            height: 26px;
            position: absolute;
            content: "";
            display: block;
            top: 680px;
            left: -70px;
          }
          .marvel-base-device.macbook .bottom-bar:before,
          .marvel-base-device.macbook .bottom-bar:after {
            height: calc(100% - 2px);
            width: 80px;
            content: "";
            display: block;
            top: 0;
            position: absolute;
          }
          .marvel-base-device.macbook .bottom-bar:before {
            left: 0;
            background: #f0f0f0;
            background: -moz-linear-gradient(
              left,
              #747474 0%,
              #c3c3c3 5%,
              #ebebeb 14%,
              #979797 41%,
              #f0f0f0 80%,
              #f0f0f0 100%,
              #f0f0f0 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right top,
              color-stop(0%, #747474),
              color-stop(5%, #c3c3c3),
              color-stop(14%, #ebebeb),
              color-stop(41%, #979797),
              color-stop(80%, #f0f0f0),
              color-stop(100%, #f0f0f0),
              color-stop(100%, #f0f0f0)
            );
            background: -webkit-linear-gradient(
              left,
              #747474 0%,
              #c3c3c3 5%,
              #ebebeb 14%,
              #979797 41%,
              #f0f0f0 80%,
              #f0f0f0 100%,
              #f0f0f0 100%
            );
            background: -o-linear-gradient(
              left,
              #747474 0%,
              #c3c3c3 5%,
              #ebebeb 14%,
              #979797 41%,
              #f0f0f0 80%,
              #f0f0f0 100%,
              #f0f0f0 100%
            );
            background: -ms-linear-gradient(
              left,
              #747474 0%,
              #c3c3c3 5%,
              #ebebeb 14%,
              #979797 41%,
              #f0f0f0 80%,
              #f0f0f0 100%,
              #f0f0f0 100%
            );
            background: linear-gradient(
              to right,
              #747474 0%,
              #c3c3c3 5%,
              #ebebeb 14%,
              #979797 41%,
              #f0f0f0 80%,
              #f0f0f0 100%,
              #f0f0f0 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#747474', endColorstr='#f0f0f0', GradientType=1);
          }
          .marvel-base-device.macbook .bottom-bar:after {
            right: 0;
            background: #f0f0f0;
            background: -moz-linear-gradient(
              left,
              #f0f0f0 0%,
              #f0f0f0 0%,
              #f0f0f0 20%,
              #979797 59%,
              #ebebeb 86%,
              #c3c3c3 95%,
              #747474 100%
            );
            background: -webkit-gradient(
              linear,
              left top,
              right top,
              color-stop(0%, #f0f0f0),
              color-stop(0%, #f0f0f0),
              color-stop(20%, #f0f0f0),
              color-stop(59%, #979797),
              color-stop(86%, #ebebeb),
              color-stop(95%, #c3c3c3),
              color-stop(100%, #747474)
            );
            background: -webkit-linear-gradient(
              left,
              #f0f0f0 0%,
              #f0f0f0 0%,
              #f0f0f0 20%,
              #979797 59%,
              #ebebeb 86%,
              #c3c3c3 95%,
              #747474 100%
            );
            background: -o-linear-gradient(
              left,
              #f0f0f0 0%,
              #f0f0f0 0%,
              #f0f0f0 20%,
              #979797 59%,
              #ebebeb 86%,
              #c3c3c3 95%,
              #747474 100%
            );
            background: -ms-linear-gradient(
              left,
              #f0f0f0 0%,
              #f0f0f0 0%,
              #f0f0f0 20%,
              #979797 59%,
              #ebebeb 86%,
              #c3c3c3 95%,
              #747474 100%
            );
            background: linear-gradient(
              to right,
              #f0f0f0 0%,
              #f0f0f0 0%,
              #f0f0f0 20%,
              #979797 59%,
              #ebebeb 86%,
              #c3c3c3 95%,
              #747474 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f0f0f0', endColorstr='#747474', GradientType=1);
          }
          .marvel-base-device.macbook .camera {
            background: #3c3d3d;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 20px;
            left: 50%;
            margin-left: -5px;
            -webkit-border-radius: 100%;
            border-radius: 100%;
          }
          .marvel-base-device.macbook .home {
            display: none;
          }
        `}</style>
        <div
          className={`${deviceName} ${color} ${orientation} marvel-base-device`}
          style={{
            transform: "scale(" + transform + ")",
            transformOrigin: "top left",
          }}
        >
          {divs}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="marvel-device-wrapper">
        {this.createDeviceDivs(this.props)}
      </div>
    );
  }
}

MarvelDevices.defaultProps = {
  deviceName: "macbook",
  color: "",
  orientation: "",
  transform: 0.1,
};

MarvelDevices.propTypes = {
  deviceName: PropTypes.string,
  color: PropTypes.string,
  orientation: PropTypes.string,
  children: PropTypes.node,
  transform: PropTypes.number,
};

export default MarvelDevices;
