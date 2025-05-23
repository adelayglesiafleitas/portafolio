interface Data {
  heading: string;
  paragraphs?: string[];
  name?: string;
  subtitle?: string;
}

export const hero: Data = {
  heading: "Hi, I'm",
  name: "ALEJANDRO",
  subtitle: "Frontend Developer & 3D Generalist",
};

export const about: Data = {
  heading: "WHO AM I?",
  paragraphs: [
    "👨‍💻 I am a passionate Frontend Developer with a strong background in 3D modeling and animation. I love creating interactive and visually stunning web applications that provide an exceptional user experience.",
    "🚀 My journey in the tech world began with a fascination for design and technology, which led me to explore the realms of 3D graphics and web development. I enjoy combining my artistic skills with technical expertise to bring ideas to life.",
    "🎨 When I'm not coding, you can find me experimenting with new design tools, exploring the latest trends in web development, or diving into the world of 3D art.",
  ],
};
export const goals: Data = {
  heading: "WHAT ARE MY GOALS?",
  paragraphs: [
    "🎯 My main goal is to grow as a Frontend Developer by working on challenging and meaningful projects that make a difference.",
    "📚 I want to continue learning and improving my skills in modern web technologies, especially React, TypeScript, and performance optimization.",
    "🤝 I also aim to collaborate with creative and motivated teams where I can contribute my experience in both development and design.",
    "🌍 Ultimately, I want to build digital experiences that are not only functional but also inclusive, accessible, and inspiring.",
  ],
};
export const more: Data = {
  heading: "A LITTLE MORE!",
  paragraphs: [
    "🎮 I'm a huge fan of video games, especially strategy and action titles like DOTA — they help me stay sharp and think creatively.",
    "🎬 I have a strong background in 3D animation and visual effects, and I love combining that experience with frontend development to create unique digital experiences.",
    "🧠 I'm a curious person by nature. Whether it's learning a new tool, improving my English, or studying UX design, I’m always looking to grow.",
    "💬 I enjoy collaborating and teaching others — I’ve given animation classes to young students and shared my knowledge in various creative environments.",
  ],
};
