import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "../components/Select";
import Option from "../components/Option";
import OptionList from "../components/OptionList";

describe("Select Component", () => {
  it('커스텀 placeholder가 없고, 선택된 옵션 값이 없을 경우 => 기본 placeholder인 "선택"이 노출된다.', () => {
    render(
      <Select selectedOption={undefined}>
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    expect(select).toHaveTextContent("선택");
  });

  it("커스텀 placeholder가 있고, 선택된 옵션 값이 없을 경우 => 지정된 placeholder가 노출된다.", () => {
    render(
      <Select selectedOption={undefined} placeholder={"값을 선택해 주세요."}>
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    expect(select).toHaveTextContent("값을 선택해 주세요.");
  });

  it("defaultOption 값이 있을 경우, 커스텀 placeholder가 있어도 defaultOption의 값을 노출한다.", () => {
    render(
      <Select
        selectedOption={undefined}
        defaultOption={{ label: "하나", value: 1 }}
        placeholder={"값을 선택해 주세요."}
      >
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    expect(select).toHaveTextContent("하나");
  });

  it("선택된 옵션 값이 있을 경우, 해당 값을 노출한다.", () => {
    render(
      <Select
        selectedOption={{ label: "셋", value: 3 }}
        defaultOption={{ label: "하나", value: 1 }}
      >
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    expect(select).toHaveTextContent("셋");
  });

  it("option 컴포넌트의 갯수 만큼, 셀렉트 옵션의 값을 노출한다.", async () => {
    const user = userEvent.setup();
    render(
      <Select selectedOption={undefined}>
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    await user.click(select);

    const options = screen.getAllByTestId("selectOption");
    expect(options).toHaveLength(3);
  });

  it("선택된 옵션의 경우, 리스트에서 배경화면이 파란색으로 하이라이팅 된다.", async () => {
    const user = userEvent.setup();
    render(
      <Select selectedOption={{ label: "하나", value: 1 }}>
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    await user.click(select);

    const options = screen.getAllByTestId("selectOption");
    expect(options[0]).toHaveStyle("background-color: blue");
    expect(options[0]).toHaveStyle("color: white");
  });

  it("옵션 컴포넌트를 hover 할 경우, 배경화면이 파란색으로 하이라이팅 된다.", async () => {
    const user = userEvent.setup();
    render(
      <Select selectedOption={{ label: "하나", value: 1 }}>
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectButton");
    await user.click(select);

    const options = screen.getAllByTestId("selectOption");
    user.hover(options[0]);
    expect(options[0]).toHaveStyle("background-color: blue");
    expect(options[0]).toHaveStyle("color: white");
  });

  it("disabled가 true일 경우, style={ backgroud-color: grey, cursor: not-allowed }가 적용된다.", async () => {
    render(
      <Select selectedOption={undefined} disabled={true}>
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    );

    const select = screen.getByTestId("selectContainer");
    expect(select).toHaveStyle("background-color: grey");
    expect(select).toHaveStyle("cursor: not-allowed");
  });
});
