---
title: Future Considerations
sidebar_position: 12
---

# Future Considerations for YTML

YTML is constantly evolving to support advanced video creation features. Below are the planned enhancements:

---

## 📺 **1. New Media Tags**

- **`<video-frame>` and `<img-frame>`**:
  - Add dedicated tags for displaying only videos or images.
  - Example:
    ```html
    <video-frame src="clip.mp4" start="0s" end="10s" />
    <img-frame src="thumbnail.jpg" duration="5s" />
    ```

---

## ⏳ **2. Timeline Feature**

- Introduce **syntactic sugar** for managing video timelines more easily.
- Example:
  ```html
  <timeline>
    <frame start="0s">Welcome!</frame>
    <voice start="+1s">Hello and welcome.</voice>
    <music start="+2s" src="background.mp3" />
  </timeline>
  ```

---

## 🎭 **3. Animation Enhancements**

- **Modular Animation System**:

  - Separate JavaScript animation files for better customization.
  - Allow easy addition of custom animations.

- **Mermaid Animation Configuration**:

  - Support defining animation behaviors inside `<mermaid>` diagrams.
  - Example:
    ```html
    <mermaid animate="fade-in"> graph TD; A-->B </mermaid>
    ```

- **Sequential Mermaid Diagram Build**:
  - Support for step-by-step reveal of diagrams.
  - Example:
    ```html
    <mermaid sequence="true"> graph TD; A-->B </mermaid>
    ```

---

## 🧠 **4. AI-Powered Features**

- **`<imagine>` Tag for AI Video Generation**:

  - Allow AI-generated visuals from text descriptions.
  - Example:
    ```html
    <imagine
      prompt="A futuristic city at night, cyberpunk style"
      duration="5s"
    />
    ```

- **Vector Database for Optimized Voice Generation**:
  - Generate **text encodings** and store voice files with unique IDs.
  - If a voice matches an existing encoding, reuse it instead of regenerating.

---

## ☁️ **5. Cloud Integration**

- **Support AWS S3 for Media Storage**
  - Upload and retrieve assets directly from an S3 bucket.
- **SQS for Processing Queue**
  - Enable asynchronous rendering jobs using **AWS SQS**.

---

## 🎙 **6. Advanced Voice Features**

- **Custom Voiceovers with `<voice file="">`**

  - Allow users to provide **pre-recorded** voiceovers instead of AI-generated ones.
  - Example:
    ```html
    <voice file="narration.mp3" start="1s" />
    ```

- **Zoom-to-Part Functionality with Voice Sync**
  - Automatically **zoom in** on elements in sync with voice narration.

---

## ⚡ **7. Dynamic Animation Speed**

- Adjust animation speed **automatically** based on frame duration.
- Example:
  ```html
  <frame duration="5s" animation-speed="auto">
    <div>Dynamic animation</div>
  </frame>
  ```

---

YTML is designed for scalability and flexibility. These enhancements will make it even more **powerful for automated video production**. 🚀

Got more ideas? **Contribute on GitHub!**  
🔗 [YTML GitHub Repository](https://github.com/fahadarsal/ytml)
