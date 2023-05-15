import { Input, Select, Tag } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";
import { AiOutlineSearch } from "react-icons/ai";
import TableDataCustom from "../../components/common/TableDataCustom";
import { Link } from "react-router-dom";
import moment from "moment";
import { MdDelete } from "react-icons/md";

const columns = [
  {
    title: "No.",
    width: "5%",
    render: (item, record, index) => <>{index + 1}</>,
  },
  {
    title: "Khách hàng",
    width: "15%",
    render: () => <p>Tên khách hàng</p>,
  },
  {
    title: "Tựa đề",

    render: (item, record, index) => (
      <Link
        className="text-blue-500"
        to={`/answer-question?name=${item.name.first}`}
      >
        Sửa đổi thông tin thành viên công ty {index > 1 && "[1]"}
      </Link>
    ),
    width: "40%",
  },
  {
    title: "Trạng thái",
    render: (item, record, index) => (
      <div className="flex justify-center">
        {index > 1 && <Tag color="#87d068">Hoành thành</Tag>}
        {index === 0 && <Tag color="#2db7f5">Đang soạn thảo</Tag>}
        {index === 1 && <Tag color="#FFCC33">Tiếp nhận</Tag>}
      </div>
    ),
    width: "10%",
  },

  {
    title: "Ngày",
    dataIndex: "dob",
    render: (dob) => (
      <div className="flex justify-center">
        <span>{moment(dob.date).format(`DD-MM-YYYY hh:mm:ss`)}</span>
      </div>
    ),
    width: "25%",
  },
];

const RequestManagement = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lí yêu cầu thao tác
      </div>
      <div
        style={{ borderColor: currentColor }}
        className="w-full border-t-4 2xl:flex-nowrap flex-wrap text-sm border-y-3 border-y-teal-300 flex gap-7 items-center bg-white p-6"
      >
        <div className="flex justify-between items-center gap-3 2xl:w-1/4 md:w-1/3 w-full">
          <span className="w-2/4 block break-keep">Tìm kiếm theo</span>
          <div className="w-full">
            <Select
              defaultValue={0}
              className="w-full"
              options={[
                {
                  value: 0,
                  label: "Tất cả",
                },
                {
                  value: 1,
                  label: "Khách hàng",
                },
                {
                  value: 2,
                  label: "Tựa đề",
                },
                {
                  value: 3,
                  label: "Trạng thái",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="flex justify-start gap-7 items-center w-full">
            <Input placeholder="Nhập..." />
          </div>

          <button className="rounded-lg w-44 justify-center px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            <p> Tìm kiếm</p>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="bg-white border-t-4 my-6 ">
        <div className="float-right py-3">
          <button className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-rose-500 text-red-100  hover:bg-rose-600 duration-300">
            <span> Xóa bài báo đã chọn</span>
            <MdDelete />
          </button>
        </div>
        <TableDataCustom defaultPageSize={20} columns={columns} />
      </div>
    </div>
  );
};

export default RequestManagement;
