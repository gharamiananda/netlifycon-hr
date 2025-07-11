// import logo from "@/assets/logo.png"; // optional image support
import html2pdf from "html2pdf.js";

const pdfGeneratorFn = async () => {
  const fullContent = `
  <!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="baseline.css">
    <style type="text/css">
      table {
        border-collapse: collapse;
      }
      table td, table th {
        border: 1px solid black;
      }
      .header {
        background-color: #593186;
        color: white;
        padding: 10px;
      }
      .table-left {
        background-color:#888;
      }
      .table-main {
        background-color:#BBB;
      }
    </style>
  </head>

  <body>
    <h1 class="header" id="text-tags">Text Tags</h1>

    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>Paragraph</p>
    <address>Address</address>
    <blockquote>Block quote</blockquote>
    <pre>Preformatted text (preserves   spaces and
    line breaks)</pre>
    Horizontal rule: <hr>


    <h1 class="header" id="lists">Lists</h1>

    <ol>
      <li>Ordered</li>
      <li>list</li>
    </ol>
    <ul>
      <li>Unordered</li>
      <li>list</li>
    </ul>
    <dl>
      <dt>Description list</dt>
      <dd>terms paired with their description</dd>
      <dt>Another term</dt>
      <dd>description</dd>
    </dl>
    <details open>
      <summary>Details element - Summary</summary>
      <p>Details (hidden when collapsed)</p>
    </details>
    <select>
      <option>Drop-down</option>
      <option>list</option>
      <optgroup label="With groups">
        <option>Group item 1</option>
        <option>Group item 2</option>
      </optgroup>
    </select>

    <h1 class="header" id="text-styling">Text Styling</h1>

    <p>
      line break,<br>
      <b>bold,</b>
      <i>italics,</i>
      <u>underlined,</u>
      <s>inaccurate,</s>
      <mark>marked,</mark>
      <small>small,</small>
      <sub>subscript,</sub>
      <sup>superscript,</sup>
      <!-- <q>short quotation,</q> -->
      <abbr title="Abbreviation">abbrev.</abbr>,
      <code>code,</code>
      <br>
      <strong>important,</strong>
      <em>emphasized,</em>
      <ins>inserted,</ins>
      <del>deleted,</del>
      <samp>computer output,</samp>
      <kbd>keyboard input,</kbd>
      <var>variable,</var>
      <cite>title of a work,</cite>
      <dfn>definition,</dfn>
      <br>
      <span>span (a way of sectioning off text),</span>
      <br>
      word break oppor<wbr />tunity (for long words),
      <br>
      <time datetime="08:00">time (for machine readability),</time>
      <data value="12345">data (for machine readability),</data>
      <br>
      <bdi>bi-directional isolation (text direction),</bdi>
      <bdo dir="rtl">bi-directional override</bdo>,
      <ruby>ruby annotation<rp>(</rp><rt>explanation/pronunciation</rt><rp>)</rp></ruby>
    </p>

    <h1 class="header" id="sections">Sections</h1>

    <div>Div: Basic division/section</div>
    <article>Article: Independent, self-contained content</article>
    <aside>Aside: Indirectly related to the surrounding content</aside>
    <dialog open>Dialog: Dialog box or subwindow</dialog>
    <header>Header: Introductory content</header>
    <main>Main: Main content</main>
    <footer>Footer: Copyright, contact info, etc.</footer>
    <nav>Nav: Set of <a href="#sections">navigation</a> <a href="#tables">links</a></nav>
    <section>Section: Thematic grouping of content</section>

    <h1 class="header" id="tables">Tables</h1>

    <p><em><strong>Note:</strong> Tables do not have borders (lines between cells) by default. These must be added using CSS.</em></p>

    <h3>Simple table</h3>
    <table>
      <tr>
        <td>Row 1 cell 1</td>
        <td>Row 1 cell 2</td>
      </tr>
      <tr>
        <td>Row 2 cell 1</td>
        <td>Row 2 cell 2</td>
      </tr>
    </table>

    <h3>Advanced table</h3>
    <table>
      <caption>Table caption</caption>
      <colgroup>
        <col class="table-left">
        <col class="table-main" span="2">
      </colgroup>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1 cell 1</td>
          <td>Row 1 cell 2</td>
          <td>Row 1 cell 3</td>
        </tr>
        <tr>
          <td>Row 2 cell 1</td>
          <td>Row 2 cell 2</td>
          <td>Row 2 cell 3</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer 1</td>
          <td colspan="2">Footer 2 (Spanning 2 columns)</td>
        </tr>
      </tfoot>
    </table>

    <h1 class="header" id="forms">Forms</h1>

    <form action="">
      Text input: <input type="text" name="textInput1" value="Value"><br>
      Button input: <input type="button" value="Button"><br>
      Checkbox input: <input type="checkbox"><br>
      Color input: <input type="color"><br>
      Date input: <input type="date"><br>
      Datetime input: <input type="datetime-local"><br>
      Email input: <input type="email"><br>
      File input: <input type="file"><br>
      Hidden input: <input type="hidden"><br>
      Image input: <input type="image"><br>
      Month input: <input type="month"><br>
      Number input: <input type="number"><br>
      Password input: <input type="password"><br>
      Radio input: <input type="radio"><br>
      Range input: <input type="range"><br>
      Reset input: <input type="reset"><br>
      Search input: <input type="search"><br>
      Submit input: <input type="submit"><br>
      Tel input: <input type="tel"><br>
      Time input: <input type="time"><br>
      URL input: <input type="url"><br>
      Week input: <input type="week"><br>

      <label for="textInput2">Label (for text input):</label>
      <input type="text" id="textInput2" name="textInput2" placeholder="Placeholder"><br>

      Input with datalist: <input list="datalist1"><br>
      <datalist id="datalist1">
        <option>Option 1</option>
        <option>Option 2</option>
      </datalist>

      <output>Output</output><br>
      <textarea>Textarea</textarea><br>

      <fieldset>
        <legend>Fieldset with legend</legend>
        Input in a fieldset: <input>
      </fieldset>
    </form>

    <h1 class="header" id="inline-elements">Inline elements</h1>

    <a href="https://www.google.com/">Anchor tag (hyperlink)</a>
    <button>Button</button>
    <meter value="0.6">60%</meter>
    <progress value="0.6">60%</progress>

    <embed type="text/html" src="lorem-ipsum.html" />
    <object data="lorem-ipsum.html">
      <param name="autoplay" value="true">
    </object>

    <h1 class="header" id="media-elements">Media elements</h1>

    <img src="Wikipedia-logo-v2.png" alt="Wikipedia logo">

    <picture>
      <source media="(min-width:650px)" srcset="Wikipedia-logo-v2.png" />
      <img src="Wikipedia-logo-v2.png" alt="Wikipedia logo">
    </picture>

    <img src="Wikipedia-logo-v2.png" alt="Wikipedia logo" usemap="#imgmap">
    <map name="imgmap">
      <area shape="rect" coords="0,0,100,92" alt="Area 1" href="#text-tags">
      <area shape="rect" coords="100,92,200,183" alt="Area 2" href="#media-elements">
    </map>

    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
      Sorry, your browser does not support inline SVG.
    </svg>

    <canvas id="canvas">Your browser does not support the canvas tag.</canvas>

    <audio controls>
      <source src="https://www.w3schools.com/TAGS/horse.mp3" />
      <track src="" kind="subtitles" />
    </audio>

    <video controls poster="Wikipedia-logo-v2.png">
      <source src="https://www.w3schools.com/TAGS/movie.mp4" />
    </video>

    <figure>
      <img src="Wikipedia-logo-v2.png" alt="Wikipedia logo">
      <figcaption>Figure with caption</figcaption>
    </figure>

    <noscript>Only rendered when JS is disabled</noscript>
    <template>Used for duplication with JS</template>

    <script>
      var ctx = document.getElementById("canvas").getContext('2d');
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, 300, 150);
    </script>
  </body>
</html>
  `;

  const blob = await html2pdf().from(fullContent).outputPdf("blob");
  console.log(blob, "blob");
  return new File([blob], "offerletter.pdf", { type: "application/pdf" });
};

export default pdfGeneratorFn;
