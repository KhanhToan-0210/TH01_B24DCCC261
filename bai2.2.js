// DanhSachCongViec.js
import React, { useState } from 'react';
import ItemCongViec from './bai2.1';

function DanhSachCongViec() {
  const [congViec, setCongViec] = useState([]); // State để lưu danh sách công việc
  const [input, setInput] = useState(''); // State để lưu giá trị input

  const themCongViec = () => {
    if (input.trim() === '') return; // Không thêm nếu input trống
    setCongViec([...congViec, input.trim()]);
    setInput(''); // Reset input sau khi thêm công việc
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Cập nhật input khi thay đổi
        placeholder="Nhập công việc"
      />
      <button onClick={themCongViec}>Thêm</button>

      <ul>
        {congViec.map((congViec, index) => (
          <ItemCongViec key={index} congViec={congViec} /> // Duyệt và truyền từng task vào ItemCongViec
        ))}
      </ul>
    </div>
  );
}

export default DanhSachCongViec;
