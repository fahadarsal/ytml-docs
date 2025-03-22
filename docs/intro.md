---
title: Introduction
sidebar_position: 1
---

# Introduction to YTML

**YTML** (YouTube Markup Language) is a custom markup language designed to simplify video creation by defining animations, voiceovers, timing, and transitions. It extends HTML capabilities with additional semantic tags to manage video production workflows, supporting seamless integration with audio and visual assets.

## **Key Principles**

- ✅ **HTML Compatibility**: YTML is a superset of HTML, allowing seamless use of HTML elements and CSS animations.
- ✅ **Custom Tags**: Provides video-specific tags for music, voiceovers, transitions, and reusable components.
- ✅ **Flexibility**: Enables dynamic timing, reusable components, and conditional logic for scripting.

---

## **🚀 Installation**

YTML requires **Python 3.8+** and can be installed via `pip`:

```sh
pip install ytml-toolkit
```

> ⚠️ **Note:** In some cases, you may need to install **Playwright** for headless browser support.  
> Run the following command if you encounter issues:
>
> ```sh
> playwright install
> ```

---

## **✨ Example YTML Script**

Below is a **basic example** of a YTML script:

```html
<config>
  FRAME_RATE=30 VIDEO_WIDTH=1920 VIDEO_HEIGHT=1088 ENABLE_AI_VOICE=True
</config>

<composite id="intro">
  <frame duration="3s">
    <div>Welcome to my channel!</div>
  </frame>
  <voice start="0.5s" end="4s">Hello and welcome to my channel.</voice>
  <music src="background.mp3" loop="true" start="0s" end="10s" />
</composite>
```

The above script will:

1. Display the text **"Welcome to my channel!"** for 3 seconds.
2. Play a **voiceover** saying "Hello and welcome to my channel."
3. Add **background music** starting at 0 seconds and looping.

---

## **🎬 Sample Output Video**

Here’s an example of a video generated using YTML:

[![Watch the Sample Video](https://img.youtube.com/vi/VHMiOc_atcs/0.jpg)](https://www.youtube.com/watch?v=VHMiOc_atcs)

---

## **🛠️ YTML CLI Commands**

YTML provides a CLI tool to convert `.ytml` scripts into video files.

### **Basic Usage**

```sh
ytml -i input.ytml -o output.mp4
```

This command:

- Takes `input.ytml` as input.
- Generates `output.mp4` as the final video.

### **CLI Options**

| Option           | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| `-i`, `--input`  | Path to the YTML input file                                              |
| `-o`, `--output` | Output video file (default: `output_video.mp4`)                          |
| `--use-gtts`     | Uses `gTTS` VocalForge instead of Eleven Labs for voice generation       |
| `--skip`         | Skips specific steps (`parse`, `voiceover`, `render`, `sync`, `compose`) |
| `--resume`       | Resume a job using the provided UUID                                     |
| `--job`          | Job ID of voiceovers to mix (Requires `--skip voiceover`)                |
| `--preview`      | Preview HTML output only                                                 |
| `--version`      | Show CLI version                                                         |
| `--verbose`      | Enable detailed logging                                                  |

### **Example Usages**

- **Skip rendering & voiceover steps:**

  ```sh
  ytml -i script.ytml -o output.mp4 --skip render voiceover
  ```

- **Resume a previously stopped job:**

  ```sh
  ytml --resume 123e4567-e89b-12d3-a456-426614174000
  ```

- **Preview the HTML structure instead of rendering a video:**

  ```sh
  ytml -i script.ytml --preview
  ```

- **Enable verbose logging:**
  ```sh
  ytml -i script.ytml -o output.mp4 --verbose
  ```

---

## **⚙️ YTML Configuration**

YTML allows custom configurations through the `<config>` section.

### **Example Config Block**

```html
<config>
  FRAME_RATE=30 VIDEO_WIDTH=1920 VIDEO_HEIGHT=1088 ENABLE_AI_VOICE=True
  DEFAULT_TRANSITION_EFFECT="fade" AI_IMAGE_STYLE="3D" LOG_LEVEL="DEBUG"
</config>
```

---

## **📂 Asset Management in YTML**

YTML automatically includes predefined **CSS, JavaScript, and animation files** at the start of every script. These assets help maintain styling, enable animations, and integrate interactive components.

### **Default Assets**

YTML appends the following assets to every script:

#### **CSS Files**

```json
{
  "css": ["css/merge_conflict_styles.css"]
}
```

#### **JavaScript Files**

```json
{
  "js": ["js/mermaid_init.js", "js/prism.js"]
}
```

#### **Animation Files**

```json
{
  "animations": ["js/typewriter_effect.js"]
}
```

### **Handling Additional Assets**

- All **referenced files in a YTML script** (CSS, JS, images, sounds, fonts) **must be placed inside the `assets/` directory**.
- When using custom styles or animations, update the `<config>` section:
  ```html
  <config>
    HTML_ASSETS = { "css": ["css/custom_styles.css"], "js":
    ["js/custom_script.js"], "animations": ["js/new_animation.js"] }
  </config>
  ```

## **🔑 Setting Up AI Voice Generation**

YTML supports AI-generated voiceovers via **Eleven Labs API**. To enable it:

1. **Set up your API key:**
   ```sh
   export ELEVEN_LABS_API_KEY="your-api-key-here"
   ```
2. **Ensure AI voice is enabled in the YTML script:**
   ```html
   <config> ENABLE_AI_VOICE=True AI_VOICE_ID="yDUXXKsu0jF5vdJnWAPU" </config>
   ```

> If **no API key is set**, YTML will fall back to **Google Text-to-Speech (gTTS)**.

---

## **⚙️ YTML Configuration**

YTML allows custom configurations through the `<config>` section. Here’s an overview:

### **Example Config Block**

```html
<config>
  FRAME_RATE=30 VIDEO_WIDTH=1920 VIDEO_HEIGHT=1088 ENABLE_AI_VOICE=True
  DEFAULT_TRANSITION_EFFECT="fade" AI_IMAGE_STYLE="3D" LOG_LEVEL="DEBUG"
</config>
```

### **Configuration Options**

| Setting                     | Description                           | Default  |
| --------------------------- | ------------------------------------- | -------- |
| `FRAME_RATE`                | Video frame rate                      | `30`     |
| `VIDEO_WIDTH`               | Output video width                    | `1920`   |
| `VIDEO_HEIGHT`              | Output video height                   | `1088`   |
| `ENABLE_AI_VOICE`           | Enables AI-generated voiceovers       | `True`   |
| `DEFAULT_TRANSITION_EFFECT` | Default video transition              | `"fade"` |
| `AI_IMAGE_STYLE`            | Style for AI-generated images         | `"3D"`   |
| `LOG_LEVEL`                 | Logging level (`DEBUG`, `INFO`, etc.) | `"INFO"` |

---

## **🛠️ Config File Loading**

YTML can **read configurations from a file** and override default values.

### **Example: Reading Configurations**

```python
from ytml_config import get_config_from_file

config = get_config_from_file("script.ytml")
print(config.FRAME_RATE) # Prints the frame rate from the script
```

YTML extracts `<config>` sections and applies them dynamically.

---

## **🎯 Summary**

✅ **YTML simplifies video creation with a markup-based approach**  
✅ **Installation via `pip install ytml-toolkit`**  
✅ **Use `ytml -i input.ytml -o output.mp4` to generate videos**  
✅ **Supports AI voices via `ELEVEN_LABS_API_KEY`**  
✅ **Configuration available via `<config>` section**

[Next: Tags Overview →](/docs/tags)
