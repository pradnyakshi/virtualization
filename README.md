# Visualization

Linear and Binary search algorithm and Rat in Maze problem visualization 

## Home Page

![Capture](https://github.com/pradnyakshi/virtualization/assets/90089158/15fcc620-1d4f-48c4-b2fd-033520bc230f)

### `Linear Search`

Linear search is a basic searching algorithm that sequentially checks each element\
in a collection to find a specific target element.

The steps in a linear search are as follows:

&nbsp;  1.Start at the beginning of the collection.\
&nbsp;  2.Compare the current element with the target element you are searching for.\
&nbsp;  3.If the current element matches the target element, the search is successful.\
&nbsp;  4.If the current element does not match the target element, move to the next element in the collection.\
&nbsp; 5.Repeat steps 2-4 until either the target element is found or the end of the collection is reached.\
&nbsp; 6.If the end of the collection is reached without finding the target element, the search is unsuccessful.\

![Capture1](https://github.com/pradnyakshi/virtualization/assets/90089158/d8cf062b-e6bf-4c3e-ac97-ef03299d2817)
![Capture2](https://github.com/pradnyakshi/virtualization/assets/90089158/8948d59c-330f-4dba-aac8-5e1a06450572)

### `Binary Search`

Binary search is a fast and efficient searching algorithm used to locate a 
specific target element within a sorted collection (such as an array or list)
by repeatedly dividing the collection into halves and eliminating the half
in which the target cannot be located, ultimately zeroing in on the desired element.

The steps in a binary search are as follows:

&nbsp; 1.Set low and high indices.\
&nbsp; 2.Calculate the middle index.\
&nbsp; 3.Compare middle element with target.\
&nbsp; 4.If equal, search successful.\
&nbsp; 5.If target is smaller, update high index.\
&nbsp; 6.If target is larger, update low index.\
&nbsp; 7.Repeat 3-7 until found or indices cross.\
&nbsp; 8.If indices cross, search unsuccessful.\
![Capture3](https://github.com/pradnyakshi/virtualization/assets/90089158/5bd26a7d-35ca-463a-bb2b-ed6892700bf7)

![Capture4](https://github.com/pradnyakshi/virtualization/assets/90089158/5bd19725-f6dd-45fe-ab9c-f0c7b08f10a3)

### `Rat in maze`

The "Rat in a Maze" problem is a classic computer science puzzle that involves finding a path for a rat to navigate from the starting point to the destination point in a maze. The maze is represented as a grid with cells, some of which may be blocked (obstacles) and some of which are open (passable).

the steps to solve the Rat in a Maze problem:

&nbsp; 1.Define the maze as a grid.\
&nbsp; 2.Start from the initial position (usually the top-left corner).\
&nbsp; 3.If the current position is the destination, the path is found.\
&nbsp; 4.Check if the current position is valid (within the maze and not blocked).\
&nbsp; 5.If valid, mark the current position as visited.\
&nbsp; 6.Recursively try to move in two directions (down ,right).\
&nbsp; 7.If a valid path is found in any direction, return true.\
&nbsp; 8.If no valid paths are found, backtrack by marking the current position as unvisited and return false.\

![Capture5](https://github.com/pradnyakshi/virtualization/assets/90089158/5eca9895-9cf0-4f91-a0ed-32b615116c18)
![Capture6](https://github.com/pradnyakshi/virtualization/assets/90089158/92e64100-d1f0-4e83-9a28-9ee54c38faca)
