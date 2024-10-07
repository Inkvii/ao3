import { default as Component } from "./UniversalTable"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Table/UniversalTable",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isRefetching: { control: "boolean", description: "Shows fetching indicator on the table" },
    children: { table: { disable: true } } satisfies TableProps,
    sorting: { table: { disable: true } } satisfies TableProps,
    data: { table: { disable: true } } satisfies TableProps,
    columns: { table: { disable: true } } satisfies TableProps,
    setSorting: { table: { disable: true } } satisfies TableProps,
    "data-testid": { table: { disable: true } } satisfies TableProps,
  },
  decorators: [
    (Story) => {
      return (
        <ResizableBox>
          <Story />
        </ResizableBox>
      )
    },
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {
    variant: "gradient",
    data: [
      {
        n: "1",
        id: "dc62ff8d-dc26-48a2-892b-57ea927a84b1",
        name: "Candia Garrido",
        address: "Trap Street 6104, Scooba, India, 282726",
        birthDate: "12.09.2021",
        email: "deryck_samplenl89@boxed.qj",
      },
      {
        n: "2",
        id: "0a37cf97-a3ba-4dff-8feb-b233d41728d2",
        name: "Perlita Oberlander",
        address: "Anchor Road 4497, Ramsgate, Nepal, 406264",
        birthDate: "23.04.2005",
        email: "mart_obannon3t@techrepublic.sg",
      },
      {
        n: "3",
        id: "a7e0d023-6201-43f6-a254-b4e52e2be1ff",
        name: "Joey Pippins",
        address: "Enquiries St 9702, Pauls Valley, Finland, 930452",
        birthDate: "13.05.2002",
        email: "dyana_albanoclpf@lawyers.bdt",
      },
      {
        n: "4",
        id: "cee3596c-8321-459a-bc80-12f873211421",
        name: "Shallon Cadwallader",
        address: "Package Road 6540, Brookeville, Vietnam, 807119",
        birthDate: "26.07.2021",
        email: "shenay_montielr9g@contacting.cu",
      },
      {
        n: "5",
        id: "604ef8e8-1a4c-4b37-a59b-b21f8500723d",
        name: "Hebah Maes",
        address: "Utilize St 3988, Unis, So Tom And Prncipe, 393301",
        birthDate: "27.12.1998",
        email: "merica_nichol6z1e@manchester.vvj",
      },
      {
        n: "6",
        id: "c4a1e130-edf6-41f9-b786-0e4a793dd980",
        name: "Nieshia Hageman",
        address: "Degrees Road 5035, Painter, Croatia, 628177",
        birthDate: "19.04.2018",
        email: "tomislav_freww@promotional.oz",
      },
      {
        n: "7",
        id: "5c1f4945-9a90-4535-bdaf-9cb75fe5d444",
        name: "Trevon Magdaleno",
        address: "Districts St 3665, Lake Leelanau, Gibraltar, 757385",
        birthDate: "18.01.2007",
        email: "lehi_bonillayba@independently.kts",
      },
      {
        n: "8",
        id: "3d190703-9f22-45d5-9d2d-8879b8a94f0f",
        name: "Royce Aleman",
        address: "Wright Road 1628, West Van Lear, Uzbekistan, 732031",
        birthDate: "15.06.2019",
        email: "lizbeth_chewningi9a@restaurants.fho",
      },
      {
        n: "9",
        id: "bc824e97-e8d4-4381-ba6c-0ec28d35bc8f",
        name: "Amey Marek",
        address: "Hereby Road 1657, Jalapa, Togo, 091009",
        birthDate: "28.10.1972",
        email: "gideon_baillargeonr@proteins.um",
      },
      {
        n: "10",
        id: "8bea1e1c-4ebc-4ae0-bfb2-d984ed72c9e4",
        name: "Keondra Blain",
        address: "Merger St 6082, Mc Connelsville, Jordan, 205448",
        birthDate: "09.09.1981",
        email: "gentry_aderholtv56@lately.yn",
      },
    ],
    sorting: [],
    setSorting: () => {},
    isRefetching: false,
  },
}
