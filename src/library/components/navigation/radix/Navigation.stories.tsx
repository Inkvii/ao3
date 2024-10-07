import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Skeleton } from "@/library/loader/skeleton"
import * as Menu from "@/library/navigation/NavigationContent"
import { twMerge } from "tailwind-merge"

const meta = {
  title: "Navigation",
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  render: () => {
    return (
      <div className={"space-y-2"}>
        <NavbarLinksContainer />
        <Skeleton.Root>
          <Skeleton.Rectangle width={"600px"} height={"400px"} />
          <Skeleton.Text lineCount={7} />
          <Skeleton.Rectangle width={"200px"} height={"200px"} />
          <Skeleton.Text lineCount={7} />
          <Skeleton.Text lineCount={7} />
          <Skeleton.Text lineCount={7} />
        </Skeleton.Root>
      </div>
    )
  },
}

function NavbarLinksContainer() {
  return (
    <nav className={twMerge("gap-2 md:gap-4 items-center", "neutral dark:neutral")}>
      <NavigationMenu.Root>
        <NavigationMenu.List className={"flex flex-wrap gap-2 relative z-20"}>
          <Menu.Link href={{ path: "#" }}>Home</Menu.Link>
          {/*<NavigationTopLink href={{ path: "#" }}>Home</NavigationTopLink>*/}

          {["1", "2"].map((a) => (
            <Menu.Content.Root key={`menu${a}`} name={"Menu" + ` ${a}`}>
              <Menu.Content.List.Root
                className={twMerge("p-4", "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2")}
              >
                <Menu.Content.List.Item name={"User"} description={"User details"} href={{ path: "#" }} />
                <Menu.Content.List.Item name={"Orders"} description={"See all orders"} href={{ path: "#" }} />

                {["Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4", "Placeholder 5"].map((a) => (
                  <Menu.Content.List.Item
                    key={a}
                    name={a}
                    description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, laudantium. ${a}`}
                    href={{ path: "#" }}
                    disabled={true}
                  />
                ))}
              </Menu.Content.List.Root>
            </Menu.Content.Root>
          ))}

          <div className="absolute top-full left-0 flex w-full">
            <NavigationMenu.Viewport
              className={twMerge(
                "w-full max-w-5xl",
                "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut",
                "relative mt-2 ",
                "h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center]",
                "overflow-hidden",
                "bg-neutral-50 dark:bg-neutral-700",
                "border rounded border-neutral-100 dark:border-neutral-600",
                "shadow-lg dark:shadow-neutral-700",
                "duration-300"
              )}
            />
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  )
}
