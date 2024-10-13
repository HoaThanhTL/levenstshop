import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        UNIQUELY CLASSIC CAMPAIGN | FW24
“Mỗi cá thể là một màu sắc riêng biệt!”, đó cũng là nguồn cảm hứng lớn nhất để phát triển nên bộ sưu tập Uniquely Classic.

Với châm ngôn bất biến tôn vinh những giá trị độc bản của mỗi người, từng thiết kế trong BST được kết hợp đan xen lẫn nhau giữa sự đơn giản trường tồn và những nét tinh tế đương đại, hệ thống phom dáng được nghiên cứu chuyên sâu hơn để luôn theo dòng chảy của thời đại, và với một bảng màu nhã nhặn cho cảm giác dễ chịu, tất cả sự kết hợp đó chỉ một sứ mệnh duy nhất là giúp khách hàng tự tin thể hiện phong cách riêng biệt tránh đi sự rập khuôn.

Bộ sưu tập Uniquely Classic không chỉ mang tính thời trang mà còn là lời khẳng định về phong cách, sự khác biệt và sự tự tin, để mỗi cá nhân trở thành “classic” theo cách riêng của mình.                      </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
