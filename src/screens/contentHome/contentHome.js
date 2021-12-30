import Header from "../../components/header";
import * as S from "./style";
import DropdownComp from "../../components/dropdown";
import { ReactSVG } from "react-svg";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import TagProducts from "./components/tagCollections";
import ContentCard from "./components/contentCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ContentHomeComponent(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  Modal.setAppElement("#root");

  useEffect(() => {
    props.getContentFilters();
  }, []);

  useEffect(() => {
    if (props?.contentFilters !== null) {
      // props.setContentTypes({
      //   ...props.activeContentTypes,
      //   contentSource: props?.contentFilters?.content_source[0],
      // });
      // props.setContentTypes({
      //   ...props.activeContentTypes,
      //   contentFormat: props?.contentFilters?.content_format[0],
      // });
    }
  }, [props.getContentFilters]);

  useEffect(() => {
    fetchContentList(true);
  }, [props.activeContentTypes]);

  const fetchContentList = (flag) => {
    if (
      props?.activeContentTypes !== null &&
      props?.activeContentTypes.contentSource &&
      props?.activeContentTypes.contentFormat
    ) {
      props.getContentList({
        ...props.activeContentTypes,
        contentList: [...props.contentList],
        replaceList: flag
      });
    }
  };

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
        {props?.activeContentTypes == null ||
        (props?.activeContentTypes != null &&
          !props?.activeContentTypes.contentSource) ||
        !props?.activeContentTypes.contentFormat ? (
          <p>Please Select Content Type and Content Format</p>
        ) : props?.contentList.length == 0 ? <p>No Content Found!</p> : (
          <InfiniteScroll
            dataLength={props.contentList.length} //This is important field to render the next data
            next={() => fetchContentList(false)}
            hasMore={props.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p
                style={{
                  textAlign: "center",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "5px 0"
                }}
              >
                <b>Yay! You have seen it all</b>
              </p>
            }
            className="flex-card"
          >
            {props.contentList.map((e, i) => (
              e?.media_url && <ContentCard
                toggleModal={toggleModal}
                key={e.id}
                taggedDataList={props.taggedDataList}
                postUnTagContent={props.postUnTagContent}
                contentFilters={props.contentFilters}
                postTrashContent={props.postTrashContent}
                contentList={props.contentList}
                hasMore={props.hasMore}
                {...e}
              />
            ))}
          </InfiniteScroll>
        )}
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
    zIndex: 9
  },
  overlay: {zIndex: 1000}
};
