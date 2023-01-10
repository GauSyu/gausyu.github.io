---
layout: note
title: MATH 110
permalink: /Teaching/Winter-2023/
katex: true
---

## MATH 110: Introduction to Number Theory<!-- omit from toc --> 

#### Winter 2023 • MWF 4:00 PM - 5:05 PM at Engineer 2 194 (in-person)<!-- omit from toc --> 

- [Course Information](#course-information)
- [Learning Outcomes](#learning-outcomes)
- [Structure of this course](#structure-of-this-course)
- [Grade](#grade)
	- [Homework and Classwork (50%)](#homework-and-classwork-50)
	- [Exams (50%)](#exams-50)
	- [Curve](#curve)
- [Guidelines](#guidelines)



### Course Information
[*Syllabus on Github*](https://github.com/GauSyu/MathTeachingMaterials/raw/main/Winter%202023%20MATH%20110%20UCSC/Syllabus.pdf)

  - **Instructor:**&emsp; Xu Gao (xgao26@ucsc.edu), McHenry Library 1292


  - **Lecture time and location:**&emsp; MWF 4:00 PM - 5:05 PM, Engineer 2 194

  - **Office Hours:**&emsp; MW 2:30 – 3:30 PM or by appointment. <font size="1">(This is when you come and talk to me if you have any questions, or otherwise.)</font> 

  - **Textbook.**&emsp; [*An Illustrated Theory of Numbers*](http://illustratedtheoryofnumbers.com/) by Martin H Weissman.

  - **TA.**&emsp; Changhan Zou (<czou3@ucsc.edu>)

  - **TA's Office Hours.**&emsp; TBD

  - **Discussion Sections.**

    | 01A | McHenry Clrm 1279 | Friday 9:20 AM - 10:25 AM |
    | 01B | McHenry Clrm 1279 | Tuesday 1:20 PM - 2:25 PM |

*Lecture notes can be found [**here**](https://github.com/GauSyu/MathTeachingMaterials/tree/main/Winter%202023%20MATH%20110%20UCSC).*

### Learning Outcomes
  - Familiarize Ideas and problems in number theory that play essential roles in modern mathematics.
  - Understand the roles of theorems, proofs, and counterexamples. 
  - Develop problem-solving skills.
  - Practice clear, concise, and precise mathematical writing.
  - You will need basic [$\LaTeX$](Guidelines/#latex) for this course.

### Structure of this course
![Structure of this course](https://github.com/GauSyu/MathTeachingMaterials/blob/main/Winter%202023%20MATH%20110%20UCSC/MIndmap.png?raw=true){:width="750"}


### Grade

<div class="ct-chart ct-label "></div>

The grade will be based on two parts: 
#### Homework and Classwork (50%)
   - [**Attendance and quizzes (10%)**](Guidelines/#attendance-and-quizzes), there will be attendance forms and quizzes, the lowest **5** ones will be dropped.
   - [**Glossary (10%)**](Guidelines/#glossary), you are asked to keep a glossary and share it with us before *each* exam.
   - [**Homework (30%)**](Guidelines/#homework), weekly homework (different from exercises, which will not be graded)


#### Exams (50%)
   - [**Midterm (20%)**](Guidelines/#midterm), there will be **two** midterms, the lower one will be dropped.
   - [**Final (30%)**](Guidelines/#final)


#### Curve
The final score will be curved with a norm distribution and then translated to letter grades using the following grading scheme.


| Total scores | Grade |
|:---:|:---:|
| $\geqslant 98$ | A$+$ |
| $90$ -- $97$ | A |
| $88$ -- $89$ | A$-$ |
| $85$ -- $87$ | B$+$ |
| $78$ -- $84$ | B |
| $75$ -- $77$ | B$-$ |
| $70$ -- $74$ | C$+$ |
| $60$ -- $69$ | C |
| $55$ -- $59$ | C$-$ |
| $40$ -- $54$ | D |
| $< 40$ | F |
| incomplete[^1] | I |

To pass the course, your letter grade should be at least **C**.

[^1]: Need to discuss with the instructor before the end of the course.

### [Guidelines](Guidelines/)



<script type="text/javascript">
	
	var datums={
    series: [
      { value: 10, className: "ct-series-i" },
      { value: 10, className: "ct-series-k" },
      { value: 30, className: "ct-series-m" },
      { value: 20, className: "ct-series-n" },
      { value: 30, className: "ct-series-o" }],
		labels: ["Attendance and quizzes","Glossary","Homework","Midterms","Final"]
	};
	
	var options = {
		donut: true,
			showLabel: true,
		 labelInterpolationFnc: function(value) {
			return value;
		},
		chartPadding: 30,
		labelOffset: 40,
		labelDirection: 'explode',
		width: 300,
		height: 220
	};
	
	var responsiveOptions = [
		['screen and (min-width: 640px)', {
			chartPadding: 40,
			labelOffset: 50,
			labelDirection: 'explode',
			width: 550,
			height: 400,
			labelInterpolationFnc: function(value) {
				return value;
			}
		}]
	];
	
	
	var chart = new Chartist.Pie('.ct-chart', datums, options, responsiveOptions);
	
	chart.on('draw', function(data) {
		if(data.type === 'slice') {
			// Get the total path length in order to use for dash array animation
			var pathLength = data.element._node.getTotalLength();
	
			// Set a dasharray that matches the path length as prerequisite to animate dashoffset
			data.element.attr({
				'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
			});
	
			// Create animation definition while also assigning an ID to the animation for later sync usage
			var animationDefinition = {
				'stroke-dashoffset': {
					id: 'anim' + data.index,
					dur: 1000,
					from: -pathLength + 'px',
					to:  '0px',
					easing: Chartist.Svg.Easing.easeOutQuint,
					// We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
					fill: 'freeze'
				}
			};
	
			// If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
			if(data.index !== 0) {
				animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
			}
	
			// We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
			data.element.attr({
				'stroke-dashoffset': -pathLength + 'px'
			});
	
			// We can't use guided mode as the animations need to rely on setting begin manually
			// See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
			data.element.animate(animationDefinition, false);
		}
	});
	
	// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
	chart.on('created', function() {
		if(window.__anim21278907124) {
			clearTimeout(window.__anim21278907124);
			window.__anim21278907124 = null;
		}
		window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
	});
	
</script>