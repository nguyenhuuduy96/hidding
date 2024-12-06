<template>
    <header class="fixed-top">
        <div class="header-navbar">
            <div class="ctnr-fluid">
                <div class="header-top">
                    <div class="ctnr">
                        <div class="user-account-image">
                            <div class="tablet-only-modal-login">
                                <a href="">Thủ tục truc tuyen</a>
                            </div>
                            <p class="image">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                    <path
                                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
                                </svg>
                            </p>
                            <div class="icon-down-up-account">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="box-navbar">
                    <nav class="navbar navbar-expand-xl">
                        <div class="offcanvas-navbar">
                            <div class="offcanvas-body">
                                <div class="navbar-nav-left">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a-menu v-model:selectedKeys="current" mode="horizontal" :items="menuItems" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <a href="https://demo46.bivaco.net" class="navbar-brand">
                        <div class="ta-center">
                            <div class="images-logo">
                                <div class="box-images-logo">
                                    <img class="brand-text-light"
                                        src="https://demo46.bivaco.net/storage/setting/logo-1_1733295248.webp"
                                        alt="logo" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <nav class="navbar navbar-expand-xl">
                        <div class="offcanvas-navbar">
                            <div class="offcanvas-body">
                                <div class="navbar-nav-left">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a-menu v-model:selectedKeys="current" mode="horizontal" :items="menuItems" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="header-mobile">
        <div class="header-top-ld">
            <div class="ctnr">
                <div class="box-header-ld">
                    <a href="https://demo46.bivaco.net">
                        <div class="logo-ld">
                            <img class="brand-text-light"
                                src="https://demo46.bivaco.net/storage/setting/logo-1_1733295248.webp" alt="logo" />
                        </div>
                    </a>
                    <div class="navbar-ld">
                        <div class="icon-navbar">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Menu / Menu_Alt_04">
                                        <path id="Vector" d="M5 17H19M5 12H19M5 7H13" stroke="#000000" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="navbar-menu-desktops">
                            <div class="ovl-navbar-menu"></div>
                            <div class="emmet-navbar">
                                <div class="close-navbar">
                                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g id="Menu / Close_MD">
                                                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <ul>
                                    <li>
                                        <a href="https://demo46.bivaco.net">
                                            <p>Trang chủ</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://demo46.bivaco.net/gioi-thieu">
                                            <p>Giới thiệu</p>
                                        </a>
                                    </li>
                                    <li class="menu-header-mobile">
                                        <div class="item-menu-c2-mobile-smoll">
                                            <a href="https://demo46.bivaco.net/luu-tru">
                                                <p>Lưu trú</p>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="menu-header-mobile">
                                        <div class="item-menu-c2-mobile-smoll">
                                            <a href="javascript:void(0);">
                                                <p>Ẩm thực</p>
                                            </a>
                                            <svg class="toggle-class" width="64px" height="64px" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <ul class="box-menu-c2-mobiles">
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/nha-hang">Nhà hàng</a>
                                            </li>
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/bbq">BBQ</a>
                                            </li>
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/bar-coffee">Bar &amp; Coffee</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-header-mobile">
                                        <div class="item-menu-c2-mobile-smoll">
                                            <a href="javascript:void(0);">
                                                <p>Trải nghiệm</p>
                                            </a>
                                            <svg class="toggle-class" width="64px" height="64px" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <ul class="box-menu-c2-mobiles">
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/van-don-farm">Vân Đồn Farm</a>
                                            </li>
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/trekking">Trekking</a>
                                            </li>
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/cam-trai">Cắm trại</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-header-mobile">
                                        <div class="item-menu-c2-mobile-smoll">
                                            <a href="javascript:void(0);">
                                                <p>Sự kiện</p>
                                            </a>
                                            <svg class="toggle-class" width="64px" height="64px" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <ul class="box-menu-c2-mobiles">
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/hoi-truong">Hội trường</a>
                                            </li>
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/phong-hop">Phòng họp</a>
                                            </li>
                                            <li class="item-menu-c2--smoll">
                                                <a href="https://demo46.bivaco.net/team-building">Team building</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-header-mobile">
                                        <div class="item-menu-c2-mobile-smoll">
                                            <a href="https://demo46.bivaco.net/tin-tuc">
                                                <p>Tin tức</p>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://demo46.bivaco.net/lien-he.html">
                                            <p>Liên hệ</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import "../assets/header.css";
import { createApp } from 'vue';
import Antd from 'ant-design-vue';

export default {
    data() {
        return {
            current: ['1'],
            menuItems: [
                {
                    label: 'Home',
                    key: '1',
                },
                {
                    label: 'About',
                    key: '2',
                },
                {
                    label: 'Contact',
                    key: '3',
                },
            ],
        };
    },
    name: "Headers",
};
</script>

<style></style>