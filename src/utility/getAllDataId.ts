import { data } from "@/fake-data";

export const getAllDataId = () => {
  return data.map((el) => ({ params: { id: el.id } }));
};
