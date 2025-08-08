import React from 'react';
import "./About.css"; // 确保样式文件存在
import avatar from './avatar.png';

const Index = () => (
    <div class="container">
        <div class="left">
            <img src={avatar} alt="图片" />
            <div class="personal-infofirst">个人信息</div>
            <div class="divider-white"></div>
            <div class="personal-info">3250000000@qq.cpm</div>
            <div class="personal-info">14770000000</div>
            <div class="personal-info">深圳</div>
            <div class="personal-info">www.example.com</div>

            <div class="skill-list">技能专长</div>
            <div class="divider-white"></div>
            <div class="skill-item">羽毛球
                <div class="progress">
                    <div class="percentage"></div>
                </div>
            </div>
            <div class="skill-item">自行车
                <div class="progress">
                    <div class="percentage"></div>
                </div>
            </div>
            <div class="skill-item">摩托车
                <div class="progress">
                    <div class="percentage"></div>
                </div>
            </div>
            <div class="skill-item">阅读
                <div class="progress">
                    <div class="percentage"></div>
                </div>
            </div>
        </div>

        <div class="main">
            <div
                class="myname">
                张三
            </div>

            <div class="aboutme">关于我</div>
            <div class="divider-black"></div>
            <div class="myname:hover">
                我是一名对编程特别着迷的高中生，已经自学了半年的 Python 和
                HTML。平时总爱琢磨怎么用代码做些小工具，比如帮同学整理错题的小程序。遇到技术难题会拉着同好一起讨论，也喜欢在论坛上看大神分享的教程。特别想将来能做出大家都能用的实用软件。
            </div>

            <div class="Project presentation">
                项目展示</div>
            <div class="divider-black"></div>
            <div class="card-container">
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>创建网页</p>
                <span>relation</span>
                <span>how</span>
            </div>
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>创建网页</p>
                <span>relation</span>
                <span>how</span>
            </div>
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>创建网页</p>
                <span>relation</span>
                <span>how</span>
            </div>
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>创建网页</p>
                <span>relation</span>
                <span>how</span>
            </div>
            </div>

            <div class="Winning competition">
                获奖竞赛</div>
            <div class="divider-black"></div>
            <div class="card-container">
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>机器人编程</p>
                <span>relation</span>
                <span>how</span>
            </div>
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>机器人编程</p>
                <span>relation</span>
                <span>how</span>
            </div>
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>机器人编程</p>
                <span>relation</span>
                <span>how</span>
            </div>
            <div class="project-item-card">
                <h2>xxx</h2>
                <p>机器人编程</p>
                <span>relation</span>
                <span>how</span>
            </div>
            </div>
        </div>

        <div class="right">
            <div class="Educational background">教育背景</div>
            <div class="divider-white"></div>
            <div class="personal-info">xx学校</div>
            <div class="personal-info">2017-2015</div>
            <div class="personal-info">计算机</div>

            <div class="Certificate certification">证书认证</div>
            <div class="divider-white"></div>
            <div class="skill-item">xxx
            </div>
            <div class="skill-item">xxx
            </div>
            <div class="skill-item">xxx
            </div>
            <div class="skill-item">xxx
            </div>

            <div class="Hobbies">兴趣爱好</div>
            <div class="divider-white"></div>
            <div class="skill-item">摩旅
            </div>
            <div class="skill-item">羽毛球
            </div>
            <div class="skill-item">跑步
            </div>
            <div class="skill-item">游戏
            </div>
        </div>
    </div>
);

export default Index;