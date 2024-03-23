import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CategoryItems from "./CategoryItems";
 
export function NavigationTabs() {
  const data = [
    {
      label: "SkinCare",
      value: "SkinCare",
    },
    {
      label: "People",
      value: "People",
    },
    {
      label: "Perfume",
      value: "Perfume",
    },
    {
      label: "Food",
      value: "Food",
    },
    {
      label: "Electronics",
      value: "Electronics",
    },
  ];
 
  return (
    <Tabs value="html" className="mt-20">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ label,value }) => (
          <TabPanel key={label} value={value}>
            <CategoryItems categoryName={value}/>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}