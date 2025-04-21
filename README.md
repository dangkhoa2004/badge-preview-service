# dangkh0a - Gallery

[![🌐 Tiếng Việt](https://img.shields.io/badge/Ngôn_ngữ-Tiếng_Việt-red)](./README.md) [![🌐 English](https://img.shields.io/badge/Language-English-blue)](./README_EN.md)

Ứng dụng web nhỏ gọn cho phép người dùng **chọn badge** và **xem mã nguồn** HTML, CSS, JS để tùy biến theo nhu cầu. Xây dựng với HTML, Tailwind CSS, Prism.js và Font Awesome, hỗ trợ giao diện sáng/tối và PWA cơ bản.

## Tính năng

- **Thanh điều hướng bên**: Danh sách badge theo danh mục kèm hình thu nhỏ.
- **Xem trước trực tiếp**: Hiển thị badge và bật chế độ xem mã nguồn.
- **Chỉnh sửa mã**: Thay đổi HTML, CSS, JS ngay trong trình duyệt.
- **Khôi phục mặc định**: Trả mã về trạng thái gốc với nút Reset.
- **Tìm kiếm**: Lọc badge theo tên trong thời gian thực.
- **Chuyển giao diện**: Đổi giữa chế độ sáng và tối.
- **PWA Ready**: Có `manifest.json` cho Progressive Web App.
- **Chia sẻ phong phú**: Thẻ Open Graph và Twitter Card cho preview khi chia sẻ.

## Demo

_\*Thêm link demo nếu có deployment_\*\_

## Yêu cầu

- Trình duyệt hiện đại: Chrome, Firefox, Safari, Edge.
- Kết nối Internet để tải các thư viện CDN.

## Cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/dangkh0a-gallery.git
   cd dangkh0a-gallery
   ```
2. **Chạy local server**

3. **Mở trình duyệt**
   Truy cập `http://localhost:..../index.html` để dùng ứng dụng.

## Cấu trúc dự án

```
├── index.html         # Trang chính
├── style.css          # Styles tùy chỉnh
├── components.json    # Định nghĩa badge
├── manifest.json      # PWA manifest
├── logo.png           # Icon và favicon
├── README.md          # Tài liệu dự án
```

## Hướng dẫn sử dụng

1. Chọn badge từ **sidebar** để xem trước.
2. Nhấp vào vùng preview để mở **code editor**.
3. Chỉnh sửa HTML, CSS, JavaScript theo ý.
4. Nhấn **Reset** để khôi phục mã gốc.
5. Dùng ô **Search** để tìm badge.
6. Nhấn biểu tượng **sun/moon** để chuyển giao diện.

## Đóng góp

Chào đón mọi đóng góp:

1. Fork repository.
2. Tạo nhánh mới: `git checkout -b feature/tên-tính-năng`.
3. Commit thay đổi: `git commit -m "Add new badge component"`.
4. Push lên nhánh: `git push origin feature/tên-tính-năng`.
5. Mở Pull Request.

## License

Được cấp phép theo MIT License. Xem file `LICENSE` để biết chi tiết.

> **Lưu ý:** Hầu hết các tài nguyên badge (thumbnail, SVG) được tạo bởi [img.shields.io](https://img.shields.io) ở đây chúng tôi hỗ trợ các bạn tùy biến
