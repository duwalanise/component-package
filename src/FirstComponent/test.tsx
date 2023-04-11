import { render } from "@testing-library/react";
import { FirstComponent } from ".";

describe("<FirstComponent />", () => {
  it("should render default title and body", () => {
    const { getByRole, getByText, container } = render(<FirstComponent />);

    getByRole("heading", { name: /hello, world!/i });
    getByText(/i am the first component of this lib/i);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render title and body passed as props", () => {
    const { getByRole, getByText } = render(
      <FirstComponent title='Custom Title' body='Custom Body' />,
    );

    getByRole("heading", { name: /custom title/i });
    getByText(/custom body/i);
  });
});
