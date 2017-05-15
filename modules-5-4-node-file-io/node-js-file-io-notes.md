autoscale: true
slidenumbers: true

# Reference Notes

---

# Summary
- Reading and writing files both interact with the underlying file system, which takes an indeterminate amount of time and may not succeed.
- The Node.js API takes a callback which will fire once the file I/O operation is complete.
- This callback contains any error that occurred as the first parameter, and, on read operations, the contents of the file as the second parameter.
- The file I/O API is demonstrative of Node.js's non-blocking architecture, allowing Node to do other work while the file system is 'thinking'.

---

# Not covered
- File piping is a good way of reading / writing to files quickly and without having to load the contents of the file into memory.

---

# Reading Files
- https://github.com/j7caiman/nodejs-sample-apps/tree/master/file_io_examples/readFile

---

# Writing Files
- https://github.com/j7caiman/nodejs-sample-apps/tree/master/file_io_examples/writeFile

---

# Intermediate Example:
- Create file if doesn't exist
- https://github.com/j7caiman/nodejs-sample-apps/tree/master/file_io_examples/createIfNotExist

---

# Intermediate Example:
- Read all files in directory
- https://github.com/j7caiman/nodejs-sample-apps/tree/master/file_io_examples/readDir

---

# Intermediate Example:
- Read multiple files, then do something when all files have been read.
- https://github.com/j7caiman/nodejs-sample-apps/tree/master/file_io_examples/readMultipleFiles