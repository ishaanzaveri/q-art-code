const express = require('express')
const urlSchema = require('../model/urls');

const template = `<!DOCTYPE html>
<html>
    <head>
        <title>freewall demo getting started</title>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        ></script>
        <script src="./freewall.js"></script>
    </head>
    <body>
        <div id="freewall" class="free-wall container"></div>
        <script>
            function load_img(url) {
                var img = new Image();
                $(img)
                    .on("load", function () {
                        const w = this.width;
                        console.log(w);
                        $(".container").append(
                            $(\`<div class="brick" style="width:\` + w + \`px"></div>\`).append(
                                $(this).width("100%")
                            )
                        );
                    })
                    .attr({
                        src: url,
                    });
            }

            ***template_replace***

            $(window).on("load", function () {
                wall.fitWidth();
            });

            var wall = new Freewall("#freewall");
            wall.reset({
                selector: ".brick",
                animate: false,
                cellW: 150,
                cellH: "auto",
                onResize: function () {
                    wall.fitWidth();
                },
            });

            var images = wall.container.find(".brick");
        </script>
    </body>
</html>
`

const router = express.Router()
router.get('/:question_url', async (req, res, next) => {
    const query_template = (url) => (`load_img("${url}");`)
    const question_url = req.params.question_url
    console.log(question_url)
    const question = await urlSchema.findOne({ url: question_url }).exec()

    const replacement_string = question.responses.map(val => query_template(val)).join('')
    const return_string = template.replace("***template_replace***", replacement_string)
    res.status(200).send(return_string)
})

module.exports = router