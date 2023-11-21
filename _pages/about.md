---
permalink: /
title: "TaiqiWang Personal Site"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi, I am Taiqi Wang, you can also call me Frank. I am a video game programmer with 3 years of experience.
This site is about my personal information and collection of game production works.
I graduated from Dalian University of Technology and have 3 years of experience in game program development.
This personal page shows my basic situation, collection of works, skills mastered, etc.

Basic Info
======
Chinese Name:王泰淇/Taiqi Wang
English Name: / Frank
Male, 25 years old.
From China, Jilin Province.
Undergraduate degree.
Three years of experience as a game programmer.

Technical ability and other skills
======
**Game Develop**
1. Skilled: Lua, Python, C#, Unity Engine, UE4 Engine, SVN, Git.
2. Basic understand: C++, Linux, SQL, other computer science knowledge.

**Other Skill**
1. Photoshop, AI painting.
2. Mind map, Excel, Word, etc.
3. Chinese: native Chinese speaker.
4. Engilsh: Scored 99 on the TOEFL English exam.

Personal timeline
======
2016-2020
Dalian University of Technology, School of Electronics and Information Technology, Department of Biomedical Engineering.

2020-2022
Beijing Fancyguo Dynamic Technology Company, Limited

2022-2023
NetEase-Interactive Entertainment Business Unit-Cooperative Products Division-Next Studio

Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Undergraduate Thesis
------
Virtual Human Simulation Control Based On Motion Capture And Machine Learning
  The motion capture system sets a tracker at the key part of moving object, captures the position of the tracker, and obtains the three-dimensional position and rotation data of the object, restores the position and posture of human body or other objects, and can easily transmit it to 3D Engine in real time as animation or a data collection for machine learning。
  By introducing PPO reinforcement learning and GAIL imitation learning methods, a deep reinforcement learning model is used to control the target rotation angle of each body part of the virtual human, and a physical simulation method is used to apply torsion torque, gravity, and rotation resistance for each body part. Make AI learn to imitate the recorded standard action data set, and realize the motion simulation of virtual human. By building two external environments: walking and boxing to provide reward data for AI training, we get movements similar to human behavior. And two virtual humans can fight against each other to train themselves with reinforcement learning methods.


The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
