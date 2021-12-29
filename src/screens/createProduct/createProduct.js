import { ReactSVG } from "react-svg";
import DropdownComp from "../../components/dropdown";
import Header from "../../components/header";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import * as S from "./style";

export default function CreateProductComponent(props) {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.HeadingLg>Create Product</S.HeadingLg>
        <form>
          <S.HeadingSm>Product Details</S.HeadingSm>
          <S.FormField>
            <TextInput
              label="Product Name"
              placeholder="Enter Product Name"
              value=""
              onChange={() => {}}
              className="form-field"
              title="Product Name"
              required
            />
          </S.FormField>
          <S.FormField>
            <S.Flex>
              <S.ProductImg bgImg="https://i.ibb.co/cbCqXFZ/image.png">
                <span>
                  <ReactSVG src="/assets/images/cross.svg" />
                </span>
              </S.ProductImg>
              <S.ProductImg size="null" bgImg="/assets/images/camera.svg" />
            </S.Flex>
          </S.FormField>
          <S.FormField>
            <S.Grid2>
              <TextInput
                label="Price"
                placeholder="Rs 599"
                value=""
                onChange={() => {}}
                className="form-field"
                required
              />
              <TextInput
                label="Stock"
                placeholder="4"
                value=""
                onChange={() => {}}
                className="form-field"
                required
              />
            </S.Grid2>
          </S.FormField>
          <S.FormField>
            <div className="div">
              <label>Product Description</label>
              <textarea placeholder="Type here" rows={5} />
            </div>
          </S.FormField>
          <S.FormField>
            <div className="div">
              <label>Select Category</label>
              <DropdownComp options={[]} />
            </div>
          </S.FormField>
          <S.FormField>
            <div className="div">
              <label>Select Sub-Category</label>
              <DropdownComp options={[]} />
            </div>
          </S.FormField>
          <S.FormField>
            <fieldset>
              <input
                type="checkbox"
                id="allowCod"
                name="allow_cod"
                value="Allow COD"
              />
              <label htmlFor="allowCod">Allow COD</label>
            </fieldset>
          </S.FormField>
          <S.FormField>
            <div className="div">
              <label>Variations</label>
              <S.Flex>
                <S.CategoryGroup>
                  <ReactSVG src="/assets/images/cross.svg" />
                  <span>Jute, XS</span>
                </S.CategoryGroup>
                <S.CategoryGroup>
                  <ReactSVG src="/assets/images/cross.svg" />
                  <span>Jute, M</span>
                </S.CategoryGroup>
                <S.CategoryGroup>
                  <ReactSVG src="/assets/images/cross.svg" />
                  <span>Jute, XL</span>
                </S.CategoryGroup>
                <S.CategoryGroup>
                  <ReactSVG src="/assets/images/cross.svg" />
                  <span>Red, XS</span>
                </S.CategoryGroup>
                <S.CategoryGroup>
                  <ReactSVG src="/assets/images/cross.svg" />
                  <span>Red, M</span>
                </S.CategoryGroup>
                <S.CategoryGroup>
                  <ReactSVG src="/assets/images/cross.svg" />
                  <span>Red, XL</span>
                </S.CategoryGroup>
              </S.Flex>
            </div>
          </S.FormField>

          <S.HeadingSm>Add Variants (Optional)</S.HeadingSm>
          <S.FormField>
            <TextInput
              label="Variant Name"
              placeholder="Red"
              value=""
              onChange={() => {}}
              className="form-field"
              required
            />
          </S.FormField>
          <S.VariationWrapper>
            <S.FormField>
              <fieldset>
                <S.Grid4>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="xs"
                      name="xs"
                      value="Allow COD"
                    />
                    <label htmlFor="xs">XS</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="xs"
                      name="xs"
                      value="Allow COD"
                    />
                    <label htmlFor="xs">XS</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="xs"
                      name="xs"
                      value="Allow COD"
                    />
                    <label htmlFor="xs">XS</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="xs"
                      name="xs"
                      value="Allow COD"
                    />
                    <label htmlFor="xs">XS</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="xs"
                      name="xs"
                      value="Allow COD"
                    />
                    <label htmlFor="xs">XS</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="xs"
                      name="xs"
                      value="Allow COD"
                    />
                    <label htmlFor="xs">XS</label>
                  </div>
                </S.Grid4>
              </fieldset>
            </S.FormField>
            <Button color="rgba(0, 0, 0, 0.5)">Add Variation</Button>
          </S.VariationWrapper>

          <S.Flex style={{background: "#fff", marginTop: "1rem", padding: "2rem 0"}}>
            <Button style={{ width: "140px"}} type="submit">
              NEXT
            </Button>
          </S.Flex>
        </form>
      </S.Wrapper>
    </>
  );
}
