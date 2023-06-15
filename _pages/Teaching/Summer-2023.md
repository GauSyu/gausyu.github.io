---
layout: note
title: MATH 110
permalink: /Teaching/Summer-2023/
katex: true
---

## MATH 110: Introduction to Number Theory<!-- omit from toc --> 

#### Summer 2023 • Online<!-- omit from toc --> 

- [Course Information](#course-information)
- [Learning Outcomes](#learning-outcomes)
- [Course Elements](#course-elements)
- [Structure of this course](#structure-of-this-course)
- [Grade](#grade)
	- [Curve](#curve)
- [Useful links](#useful-links)



### Course Information
  - **Instructor:**&emsp; Xu Gao (xgao26@ucsc.edu) -- see [the guideline for communication](Elements/#communication)

  - **Lecture time and location:**&emsp; Asynchronous (videos can be found on Canvas)

  - **Office Hours:**&emsp; By appointment. <font size="1">(This is when you come and talk to me if you have any questions, or otherwise.)</font> 

  - **Textbook.**&emsp; [*An Illustrated Theory of Numbers*](http://illustratedtheoryofnumbers.com/) by Martin H Weissman.

  - [**Course Syllabus**](https://github.com/GauSyu/MathTeachingMaterials/raw/main/Summer%202023%20MATH%20110%20UCSC/Syllabus.pdf)

  - [**Lecture Notes**](LectureNotes/)

### Learning Outcomes
By the end of this course, you will be able to:
  1. Familiarize yourself with fundamental concepts, ideas, and problems in number theory that play essential roles in modern mathematics.
  2. Develop a deep understanding of the role of theorems, proofs, and counterexamples, and recognize their significance in mathematical reasoning.
  3. Enhance your problem-solving skills through the exploration and application of various number theory techniques and strategies.
  4. Cultivate the ability to effectively communicate mathematical ideas clearly, concisely, and precisely through discussions, written assignments, and math writing exercises related to number theory.
  5. Acquire proficiency in using basic LaTeX formatting for mathematical notation, equations, and proofs, as it is an integral part of the course.

### [Course Elements](Elements/)

### Structure of this course
![Structure of this course](https://github.com/GauSyu/MathTeachingMaterials/blob/main/Summer%202023%20MATH%20110%20UCSC/MIndmap.png?raw=true){:width="750"}


### Grade


The grade will be based on five parts: 
<center>
<div class="ct-chart ct-label "></div>
</center>

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

To pass the course, your letter grade should be at least **C**.


### Useful links
 - [Ford circles](https://en.wikipedia.org/wiki/Ford_circle#References)
 - [Modular dynamics (Animation)](https://math.katestange.net/illustration/elementary-number-theory/modular-dynamics/)
 - [Arithmetic of Polynomials (LaTeX package)](https://github.com/GauSyu/Polynomial-division)



<script type="text/javascript">
	
	var datums={
    series: [
      { value: 20, className: "ct-series-i" },
      { value: 10, className: "ct-series-k" },
      { value: 25, className: "ct-series-m" },
      { value: 20, className: "ct-series-n" },
      { value: 25, className: "ct-series-o" }],
		labels: ["Quizzes","Glossary","Homework","Exam","Essays"]
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