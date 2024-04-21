import { Modal } from "antd";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

export default ({ videoKey, videoPlatform, isOpen, close }) => {
  const [urlVideo, setUrlVideo] = useState(null);

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatform]);

  return (
    <Modal
      className="modal-video"
      open={isOpen}
      centered
      onCancel={close}
      footer={false}
      destroyOnClose={true}
    >
      <ReactPlayer url={urlVideo} controls />
    </Modal>
  );
};
