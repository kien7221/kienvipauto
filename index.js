import React from 'react';

export default function KienVipAuto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Kiên VIP Auto</h1>
      <p className="text-lg mb-4">Ứng dụng đang được triển khai và sẽ sớm hoạt động.</p>
      <div className="p-4 bg-white shadow-lg rounded-2xl">
        <ul>
          <li><strong>Trạng thái:</strong> Đang triển khai...</li>
          <li><strong>Bot giao dịch:</strong> Kiên VIP Auto</li>
          <li><strong>Chức năng chính:</strong> Giao dịch BTC/USDT, ETH/USDT, BNB/USDT theo thời gian thực</li>
          <li><strong>Cập nhật giá:</strong> Mỗi 4 giây</li>
          <li><strong>Chiến lược:</strong> An Toàn Thông Minh</li>
        </ul>
      </div>
      <p className="mt-6 text-gray-600">Xin vui lòng quay lại sau vài phút để sử dụng!</p>
    </div>
  );
}
