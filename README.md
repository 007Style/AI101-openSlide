# AI 101: The language. The models. The machine.

Slides from **AI 101**, presented at the **2026 AI Rising Conference** in **Columbus, OH**.

By **Daneyand "DJ" Singley**, Technical Leader & Field CTO at IBM.

**Live deck: <https://007style.github.io/AI101-openSlide/s/ai-101>**

AI 101 is a vocabulary session with a hardware payoff. It starts with familiar examples and connects the terminology to the models behind today's AI applications. By the end you can follow a prompt to the GPU and explain why fitting a model in memory is only the beginning.

The deck is built with [open-slide](https://open-slide.dev): every slide is a React component on a 1920 × 1080 canvas. It was converted from a PowerPoint deck, with animation added and the visuals redrawn.

## What you will leave with

| | |
| --- | --- |
| **The language** | A vocabulary for AI conversations |
| **The model** | A mental model of how LLMs work |
| **The machine** | A way to read model and hardware specifications |

## Outline (52 slides)

| Section | Topics |
| --- | --- |
| Welcome | Intro, meetup, what you'll leave with |
| AI foundations | AI vs. machine learning vs. deep learning; recognize, predict, generate |
| The data | Structured, semi-structured and unstructured data |
| How models learn | Supervised, unsupervised and reinforcement learning |
| Evaluation | Train, validate and test splits |
| The math | Scalars, vectors, matrices and tensors |
| Machine learning | Classification, regression, clustering, anomaly detection |
| Deep learning | Neural networks, CNN / RNN / Transformer, weights and biases, epochs, loss and back propagation, trained models |
| Software | Deep learning frameworks |
| Inference | Deployment, accuracy vs. confidence |
| LLMs | Tokens and the context window, attention and the KV cache, generative and agentic AI, encoders and decoders |
| Hardware | Dedicated GPU vs. unified memory |
| From model to memory | Reading a Hugging Face repository; weight memory; KV-cache math; total memory (worked example: Qwen3-8B, Q4_K_M) |
| From memory to performance | Time to first token (TTFT) and tokens per second (TPS) |
| Wrap-up | Play with it at home, stay curious, summary |

### The worked example

The memory slides use one model, **Qwen3-8B**, end to end:

- Weights: the 5.03 GB `Q4_K_M` file from the GGUF repository.
- KV cache: `2 × 36 × 8 × 128 × 2 bytes = 147,456 bytes per token`, so about 4.83 GB at the 32K native context.
- Total: about **9.86 GB before runtime overhead**.

All arithmetic is a calculated estimate, not measured peak memory. The cache assumes 16-bit values.

## Running the deck

You need [Node.js](https://nodejs.org) 18 or newer. Run these from the `AI101/` folder.

```bash
cd AI101
./run.sh              # start the dev server and open the deck in your browser
./run.sh 4000         # use a specific port
./run.sh --present    # open the presenter view
```

`run.sh` installs dependencies on first run, picks a free port, waits for the server, then opens `/s/ai-101`. Press `Ctrl+C` to stop it.

Or use npm directly:

```bash
cd AI101
npm install
npm run dev           # then open http://localhost:5173/s/ai-101
npm run build         # static bundle in AI101/dist
npm run preview       # serve the built bundle
```

### Presenting

| Key | Action |
| --- | --- |
| `F` | Fullscreen play mode |
| `→` / `Space` | Next step or slide |
| `←` | Previous |
| `P` | Presenter view with notes and timer |
| `Esc` | Exit play mode |

The site is deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.

Speaker notes for all 52 slides are in the `notes` export of the deck, and the presenter view shows them. open-slide can also export the deck to HTML, PDF or PPTX from the editor.

## What's in the deck

- **Animated cover.** An endless Mandelbrot zoom rendered with WebGL2 and an ASCII glyph layer. The title re-decodes (scrambles, then locks) every 10 seconds. It needs a browser with WebGL2.
- **Animation on most slides.** Entrance motion, looping data-flow lines, filling memory bars, hopping tokens and similar effects. It respects `prefers-reduced-motion`.
- **Click-to-reveal builds** on the slides where the order of ideas matters.
- **Redrawn visuals** that keep the information from the original deck: the AI / ML / DL diagram, the tensor progression, the train / validate / test split, the feed-forward and back-propagation loop, and the memory and KV-cache math.
- **Screenshots kept as-is**, such as the Hugging Face model page.

## Repository layout

```
.
├── README.md
├── AI-101-blue-complete.pptx     original PowerPoint deck
├── index7.html                   standalone cover-slide animation the design is based on
└── AI101/                        the open-slide project
    ├── run.sh                    start the server and open the browser
    ├── package.json
    └── slides/
        ├── ai-101/               this deck
        │   ├── index.tsx         all 52 slides, design tokens, speaker notes
        │   └── assets/           images used by the deck
        └── getting-started/      open-slide's starter deck
```

## Credits

- Slides built with [open-slide](https://open-slide.dev).
- The cover animation design follows the cover slide of the *Inference Stack* talk at <https://faraz.github.io/talks/>. `index7.html` is a standalone study port of that effect, and the deck's cover builds on it.
- Framework logos (TensorFlow, PyTorch, Keras, Caffe), the Hugging Face screenshot and other third-party images belong to their respective owners and are used here for education.
- The semi-structured data example carries its original IBM copyright notice (© IBM Corporation 2018).

## License

No license has been set for this repository yet. Until one is added, all rights to the original content are reserved by the author.
