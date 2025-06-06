import MagazinesTable from "@/components/Megazine/AllMegazine";
import { getAllMegazines } from "@/services/ManageMagazine";
import React from "react";

const AllMegazinePageAdmin = async () => {
  const { data: AllMegazines } = await getAllMegazines();
  console.log("All Megazines:", AllMegazines);
  return (
    <div>
      <MagazinesTable magazines={AllMegazines}></MagazinesTable>
    </div>
  );
};

export default AllMegazinePageAdmin;
