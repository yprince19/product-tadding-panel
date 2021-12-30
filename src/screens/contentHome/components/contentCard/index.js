import { useRef, useState, useCallback } from "react";
import { ReactSVG } from "react-svg";
import DropdownComp from "../../../../components/dropdown";
import * as S from "./style";
import Zoom, { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ContentCard = (props) => {
  const [activeContentType, setActiveContentType] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    if (vidRef.current.paused) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
    handlePlayVideo();
  }, []);

  const untagContent = (data) => {
    props?.postUnTagContent({
      ...data,
      taggedDataList: props?.taggedDataList,
    });
  };

  const toggleModal = (type) => {
    if (activeContentType !== null) {
      props?.toggleModal(type);
    } else {
      alert("Please select a content type first.");
    }
  };

  const trashContent = async (id) => {
    console.log("clicked");
    let data = {
      ids: [id],
      contentList: [...props.contentList],
      hasMore: props.hasMore,
    };
    await props.postTrashContent(data);
  };

  return (
    <S.ContentCard>
      <S.ProductImage>
        <S.Cross style={{ zIndex: 1 }} onClick={() => trashContent(props.id)}>
          <ReactSVG src="/assets/images/cross-trash.svg" />
        </S.Cross>
        {props?.media_type == "VIDEO" ? (
          // <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <video onClick={handlePlayVideo} ref={vidRef} width="100%">
            <source src={props?.media_url} type="video/mp4" />
          </video>
        ) : (
          // </ControlledZoom>
          <Zoom>
            <img width="100%" src={props?.media_url} alt="img" />
          </Zoom>
        )}
        <S.ProductOverviewWrap>
          <ul>
            <li>
              <ReactSVG
                style={{ filter: "drop-shadow(0px 0px 4px #000)" }}
                src="/assets/images/heart.svg"
              />
              <span>{props?.likes}</span>
            </li>
            <li>
              <ReactSVG
                style={{ filter: "drop-shadow(0px 0px 4px #000)" }}
                src="/assets/images/comment.svg"
              />
              <span>{props?.comments}</span>
            </li>
            <li>
              <ReactSVG
                style={{ filter: "drop-shadow(0px 0px 4px #000)" }}
                src="/assets/images/share.svg"
              />
              <span>{props?.followers}</span>
            </li>
            {/* <li>
              <ReactSVG
                style={{ filter: "drop-shadow(0px 0px 4px #000)" }}
                src="/assets/images/eye.svg"
              />
              <span>Quick View</span>
            </li> */}
          </ul>
        </S.ProductOverviewWrap>
      </S.ProductImage>
      <S.Flex>
        <S.FlexScroll>
          <DropdownComp
            width="130px"
            placeholder="Content Type"
            options={
              props?.contentFilters !== null
                ? props?.contentFilters?.content_type
                : []
            }
            onChange={(e) => setActiveContentType(e.value)}
          />
          <S.ButtonAdd>
            <span>+Add Product</span>
          </S.ButtonAdd>
          <S.ButtonAdd
            onClick={() =>
              toggleModal({
                type: "COLLECTION",
                id: props?.id,
                activeContentType: activeContentType,
              })
            }
          >
            <span>+Tag Collections</span>
          </S.ButtonAdd>
          <S.ButtonAdd
            onClick={() =>
              toggleModal({
                type: "PRODUCT",
                id: props?.id,
                activeContentType: activeContentType,
              })
            }
          >
            <span>+Tag Products</span>
          </S.ButtonAdd>
        </S.FlexScroll>
      </S.Flex>

      {props?.taggedDataList[`${props?.id}`] &&
        [
          ...props?.taggedDataList[`${props?.id}`]["PRODUCT"],
          ...props?.taggedDataList[`${props?.id}`]["COLLECTION"],
        ].length != 0 && (
          <S.FlexScroll>
            {console.log(props)}
            {props?.taggedDataList[`${props?.id}`] &&
              [...props?.taggedDataList[`${props?.id}`]["PRODUCT"]].map(
                (e, i) => (
                  <S.CategoryGroup key={e.id}>
                    <ReactSVG
                      onClick={() =>
                        untagContent({
                          products: [
                            { content_id: props?.id, product_id: e.id },
                          ],
                          untagType: "PRODUCT",
                        })
                      }
                      src="/assets/images/cross.svg"
                    />
                    <span>{e.name}</span>
                  </S.CategoryGroup>
                )
              )}
            {props?.taggedDataList[`${props?.id}`] &&
              [...props?.taggedDataList[`${props?.id}`]["COLLECTION"]].map(
                (e, i) => (
                  <S.CategoryGroup key={e.id}>
                    <ReactSVG
                      onClick={() =>
                        untagContent({
                          products: [
                            { content_id: props?.id, collection_id: e.id },
                          ],
                          untagType: "COLLECTION",
                        })
                      }
                      src="/assets/images/cross.svg"
                    />
                    <span>{e.name}</span>
                  </S.CategoryGroup>
                )
              )}
          </S.FlexScroll>
        )}
      <S.ContentWrapper>{props.caption}</S.ContentWrapper>
    </S.ContentCard>
  );
};

export default ContentCard;
