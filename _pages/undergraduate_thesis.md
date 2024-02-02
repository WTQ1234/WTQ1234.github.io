---
layout: archive
title: "Undergraduate Thesis"
permalink: /undergraduate_thesis/
author_profile: true
---

{% include base_path %}
<br/><span style="font-weight: bold; font-size: 1.2em;">Virtual Human Simulation Control Based On Motion Capture And Machine Learning</span><br/>

The motion capture system captures crucial movement data, rebuild the body's position and posture in a 3D Engine, enabling real-time 3D animation or serving as a dataset for machine learning.

By PPO reinforcement learning and GAIL imitation methods, a deep reinforcement learning model manages a virtual human's movement. A physical simulation applies forces and resistance to movements, enables AI to learn and simulate human actions from recorded datasets. Creating two scenarios - walking and boxing - to reward AI training. And two virtual humans can use reinforcement learning for self-training.

<!-- 链接 -->
<br/><span style="font-weight: bold; font-size: 1.2em;">Links:</span><br/>

View in the youtube: <a href=" https://youtu.be/qJfW_Aatnto " target="_blank"><u>https://youtu.be/qJfW_Aatnto</u></a>

Download this undergraduate thesis: <a href=" https://drive.google.com/file/d/1IjCD1ZQgyiDycJgsHez39TiOoFXB2XoC/view " target="_blank"><u>https://drive.google.com/file/d/1IjCD1ZQgyiDycJgsHez39TiOoFXB2XoC/view</u></a>

<br/><span style="font-weight: bold; font-size: 1.2em;">Abstract</span><br/>

The motion capture system sets a tracker at the key part of moving object, captures the position of the tracker, and obtains the three-dimensional position and rotation data of the object, restores the position and posture of human body or other objects, and can easily transmit it to 3D Engine in real time as animation or a data collection for machine learning.

In the past few years, there have been some studies using motion capture systems for sports training, such as use motion capture system to record the standard movements of coaches and trainee movements in volleyball sports to improve training efficiency and the standardization of sports movements. However, the training content is basically for the trainee to repeatedly imitate the standard actions recorded in advance, the amount of data is small, the degree of interaction is weak. It will not respond to external influences, and it is difficult to conduct complex training courses.

In this paper, by introducing PPO reinforcement learning and GAIL imitation learning methods, a deep reinforcement learning model is used to control the target rotation angle of each body part of the virtual human, and a physical simulation method is used to apply torsion torque, gravity, and rotation resistance for each body part. Make AI learn to imitate the recorded standard action data set, and realize the motion simulation of virtual human. By building two external environments: walking and boxing to provide reward data for AI training, we get movements similar to human behavior. And two virtual humans can fight against each other to train themselves with reinforcement learning methods.

By generate real-time generation of virtual human actions through AI, the complexity and interactivity of the data has increased, and the motion capture data is transmitted to the virtual reality environment in real time to explore the interactive confrontation between humans and virtual humans.

<br/><span style="font-weight: bold; font-size: 1.2em;">Key Words：Reinforcement Learning；Imitation Learning；Motion Capture；Physical Simulation</span>