import Header from "../../components/header";
import * as S from "./style";
import DropdownComp from "../../components/dropdown";
import { ReactSVG } from "react-svg";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import TagProducts from "./components/tagCollections";
import ContentCard from "./components/contentCard";

export default function DisplayProductComponent(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  Modal.setAppElement("#root");

  useEffect(() => {
    props.getContentFilters();
  }, []);

  useEffect(() => {
    if (props?.contentFilters !== null) {
      props.setContentTypes({
        ...props.activeContentTypes,
        contentSource: props?.contentFilters?.content_source[0],
      });
      props.setContentTypes({
        ...props.activeContentTypes,
        contentFormat: props?.contentFilters?.content_format[0],
      });
    }
  }, [props.getContentFilters]);

  useEffect(() => {
    if (
      props?.activeContentTypes !== null &&
      props?.activeContentTypes.contentSource &&
      props?.activeContentTypes.contentFormat
    ) {
      props.getContentList({ ...props.activeContentTypes });
    }
  }, [props.activeContentTypes]);

  const toggleModal = ({ type, id, activeContentType }) => {
    setModalData({
      type: type,
      id: id,
      activeContentType: activeContentType,
    });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Flex>
          <DropdownComp
            width="48%"
            placeholder="Content Source"
            options={
              props?.contentFilters !== null
                ? props?.contentFilters?.content_source
                : []
            }
            onChange={(e) =>
              props.setContentTypes({
                ...props.activeContentTypes,
                contentSource: e.value,
              })
            }
            value={props?.activeContentTypes?.contentSource}

          />
          <DropdownComp
            width="48%"
            placeholder="Content Format"
            options={
              props?.contentFilters !== null
                ? props?.contentFilters?.content_format
                : []
            }
            onChange={(e) =>
              props.setContentTypes({
                ...props.activeContentTypes,
                contentFormat: e.value,
              })
            }
            value={props?.activeContentTypes?.contentFormat}
          />
        </S.Flex>
      </S.Wrapper>
      <S.Container>
        {props.contentList.map((e, i) => (
          <ContentCard
            toggleModal={toggleModal}
            key={i}
            taggedDataList={props.taggedDataList}
            postUnTagContent={props.postUnTagContent}
            contentFilters={props.contentFilters}
            postTrashContent={props.postTrashContent}
            contentList={props.contentList}
            {...e}
          />
        ))}
      </S.Container>

      {/* product tagging modal */}
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={() => null}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TagProducts
          postUnTagContent={props.postUnTagContent}
          taggedDataList={props.taggedDataList}
          modalData={modalData}
          parentProps={{ ...props }}
        />
      </Modal>
    </>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "426px",
    minHeight: "80vh",
    borderRadius: "30px",
  },
};
