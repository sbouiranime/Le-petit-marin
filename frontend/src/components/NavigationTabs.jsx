import { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CategoryItems from "./CategoryItems";

 
export function NavigationTabs() {

  const [categoryList, setCategory] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/product/showCategory');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setCategory(responseData);
               
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

 
  return (
    <>
    {isLoading ? <div>...is loading </div> :
    <Tabs value="All" className="mt-20 flex flex-col min-h-screen">
      
            <TabsHeader>
              <Tab value="All">All</Tab>
              {categoryList.map((category) => (
                <Tab key={category} value={category}>
                  {category.toLowerCase()}
                </Tab>

              ))}
            </TabsHeader>

            <TabsBody>
              <TabPanel value="All">
                <CategoryItems  categoryName="All"/>
              </TabPanel>
              {categoryList.map((category) => (
                <TabPanel key={category} value={category} >
                  
                  <CategoryItems  categoryName={category.toUpperCase()} />
                
                </TabPanel>
              ))}
            </TabsBody>

    </Tabs>}
    </>
  );
}