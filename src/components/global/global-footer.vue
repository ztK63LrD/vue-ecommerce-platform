<template>
    <footer class="app_footer">
        <!-- 联系我们 -->
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>客户服务</dt>
                    <dd><i class="iconfont icon-kefu1"></i> 在线客服</dd>
                    <dd><i class="iconfont icon-wentifankui"></i> 问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
                    <dd><i class="iconfont icon-weibo"></i> 微博</dd>
                </dl>
                <dl>
                    <dt>下载APP</dt>
                    <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
                    <dd class="download">
                        <span>扫描二维码</span>
                        <span>立马下载APP</span>
                        <div>下载页面</div>
                    </dd>
                </dl>
                <dl>
                    <dt>服务热线</dt>
                    <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
                </dl>
            </div>
        </div>
        <!-- 其它 -->
        <div class="extra">
            <div class="container">
                <div class="slogan">
                    <div>
                        <i class="iconfont icon-409"></i>
                        <span>价格亲民</span>
                    </div>
                    <div>
                        <i class="iconfont icon-huoche-daishouhuo"></i>
                        <span>物流快捷</span>
                    </div>
                    <div>
                        <i class="iconfont icon-yichujia"></i>
                        <span>品质新鲜</span>
                    </div>
                </div>
                <!-- 版权信息 -->
                <div class="copyright">
                    <ul>
                        <li href="javascript:;">关于我们</li>
                        <li href="javascript:;">帮助中心</li>
                        <li href="javascript:;">售后服务</li>
                        <li href="javascript:;">配送与验收</li>
                        <li href="javascript:;">商务合作</li>
                        <li href="javascript:;">搜索推荐</li>
                        <li href="javascript:;">友情链接</li>
                    </ul>
                    <div class="author">CopyRight © author</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang='scss'>
.app_footer {
    margin-top: 20px;
    overflow: hidden;

    .contact {
        background: #f5f5f5;

        .container {
            padding: 20px 10px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        dl {
            height: 160px;
            text-align: center;
            padding: 0 72px;
            border-right: 1px solid #f2f2f2;
            color: #999;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                border-right: none;
                padding-right: 0;
            }
        }

        dt {
            line-height: 1;
            font-size: 18px;
        }

        dd {
            margin: 16px 12px 0 0;
            float: left;
            width: 92px;
            height: 72px;
            padding-top: 10px;
            border: 1px solid #ededed;

            .iconfont {
                font-size: 36px;
                display: block;
                color: #666;
                margin-bottom: 5px;
            }

            &:hover {
                .iconfont {
                    color: $xtxColor;
                    cursor: pointer;
                }
            }

            &:last-child {
                margin-right: 0;
            }
        }

        .qrcode {
            width: 92px;
            height: 92px;
            padding: 7px;
            border: 1px solid #ededed;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .download {
            padding-top: 10px;
            font-size: 14px;
            width: auto;
            height: auto;
            border: none;
            cursor: pointer;

            span {
                display: block;
                margin-bottom: 15px;
            }

            div {
                padding: 10px 25px;
                margin-top: 5px;
                color: #fff;
                border-radius: 2px;
                background-color: $xtxColor;
            }
        }

        .hotline {
            padding-top: 20px;
            font-size: 22px;
            color: #666;
            width: auto;
            height: auto;
            border: none;

            small {
                display: block;
                font-size: 15px;
                color: #999;
            }
        }
    }

    .extra {
        background-color: #333;

        .container {
            width: 100%;
            height: 100%;
            .slogan {
                height: 100px;
                padding: 20px 100px;
                border-bottom: 1px solid #434343;
                display: flex;
                justify-content: space-between;

                div {
                    height: 58px;
                    line-height: 58px;
                    color: #fff;
                    font-size: 28px;

                    i {
                        font-size: 40px;
                        vertical-align: middle;
                        margin-right: 10px;
                        font-weight: 100;
                    }

                    span {
                        vertical-align: middle;
                        text-shadow: 0 0 1px #333;
                    }
                }
            }

            .copyright {
                height: 70px;
                margin-top: 40px;
                text-align: center;
                color: #999;
                font-size: 15px;
                box-sizing: border-box;

                ul {
                    display: flex;
                    justify-content: center;

                    li {
                        border-right: 1px solid #999;
                        padding: 0 10px;
                        line-height: 1;
                        color: #999;

                        &:last-child {
                            border-right: none;
                        }
                    }
                }

                .author {
                    margin-top: 20px;
                }
            }
        }
    }


}
</style>