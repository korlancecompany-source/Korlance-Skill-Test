/* AUTO-GENERATED coding problems. Expected outputs are produced by tested reference solutions. */
window.CODING = {
 "fs": [
  {
   "id": "fs1",
   "title": "API Rate Limiter (Sliding Window)",
   "difficulty": "Hard",
   "type": "code",
   "desc": "A server allows at most L requests inside any sliding window of W seconds. A request arriving at time t is ALLOWED only if fewer than L previously ALLOWED requests have a timestamp in (t - W, t]. Blocked requests are not counted. Given the request timestamps in non-decreasing order, print one character per request: A for allowed, B for blocked.",
   "input": "Line 1: N W L\nLine 2: N non-decreasing integers (timestamps in seconds)",
   "output": "A single string of N characters (A or B)",
   "constraints": "1 <= N <= 100000, 1 <= W, L <= 10^9",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "10 5 3\n1 1 2 3 5 6 6 7 11 12",
     "output": "AAABBAAAAA",
     "hidden": false
    },
    {
     "input": "6 10 2\n0 1 2 3 11 12",
     "output": "AABBAA",
     "hidden": false
    },
    {
     "input": "30 5 3\n0 2 2 3 6 9 12 13 13 13 13 15 15 18 18 21 23 24 27 29 31 33 36 36 38 38 40 42 45 46",
     "output": "AAABAAAABBBABAAAAAAAAAAAABBAAA",
     "hidden": true
    },
    {
     "input": "50 8 4\n2 4 6 8 9 9 11 12 13 14 15 15 16 18 20 21 21 22 24 26 27 28 30 31 32 34 35 37 39 39 41 41 41 41 43 45 47 47 49 51 52 53 53 54 54 54 56 58 59 61",
     "output": "AAAABBAABABBABAABAABBAAAABBAAAABBBBAAAABBABBBBAAAA",
     "hidden": true
    },
    {
     "input": "1 1 1\n5",
     "output": "A",
     "hidden": true
    },
    {
     "input": "200 20 5\n3 7 9 13 16 18 22 26 29 32 35 36 38 40 40 40 41 45 48 52 55 57 58 60 63 66 70 73 76 80 80 82 84 87 87 90 94 96 99 100 103 106 106 108 111 113 113 114 117 118 121 121 121 121 124 128 132 132 136 137 138 138 142 142 146 148 150 151 151 153 157 161 164 165 169 170 173 177 178 182 186 188 188 191 192 193 197 199 203 206 209 210 214 215 218 218 218 221 221 221 223 225 225 225 229 232 234 236 239 241 241 244 247 251 255 256 257 261 265 266 269 273 275 278 282 283 283 287 290 290 291 292 292 296 296 299 300 303 303 304 308 309 313 314 315 316 319 321 324 328 331 331 334 336 337 339 340 342 345 348 351 353 356 357 359 363 366 369 369 373 377 379 379 380 381 381 381 384 386 389 393 394 394 396 397 399 403 407 411 412 412 416 418 422 426 427 431 433 437 439",
     "output": "AAAAABBAAAAABBBBBBAAAAABBBAAAAABBBBAAABAABBBABBAABABBBABABAABBABABBBBAAAABABAABAABBABAABAABBAAABBBBBABBBABAAABBABAAABAABBAAAABBABBBBBAAABABBABBBBAAAAABBBABABAAABBABAAAABBAABBBBBAAABBBBAABAAABBAABAAABA",
     "hidden": true
    },
    {
     "input": "500 3 2\n2 4 4 4 5 5 6 6 6 8 8 9 11 11 13 15 15 17 18 19 21 21 22 23 23 24 25 25 25 26 27 28 28 28 28 28 28 29 29 29 31 33 35 36 37 38 40 42 44 46 48 48 49 50 52 52 54 55 56 58 58 60 61 63 65 66 67 68 69 69 71 73 74 74 75 77 78 79 81 81 82 83 84 86 86 88 89 89 91 91 93 93 93 95 95 95 95 95 97 98 100 102 104 105 105 106 108 108 109 110 111 112 112 113 115 115 115 115 117 117 119 121 123 125 127 128 129 129 129 129 129 130 132 133 134 135 136 136 138 140 140 140 142 142 144 146 147 148 150 152 154 155 155 157 157 159 159 160 160 160 162 164 164 166 167 169 170 170 172 173 174 174 175 176 177 179 180 182 183 185 187 188 188 188 190 191 191 192 192 193 195 197 198 198 200 200 200 201 202 204 206 207 207 209 211 211 211 213 213 215 217 218 220 220 221 222 224 226 228 230 230 232 232 232 232 234 235 236 238 239 240 240 242 244 246 246 246 247 248 250 251 252 252 253 253 255 257 257 259 261 262 263 264 266 266 268 270 270 270 271 273 273 273 273 273 275 277 279 281 281 282 282 283 284 284 286 286 288 290 290 290 290 291 292 292 294 294 295 296 298 299 301 301 302 303 304 304 306 308 308 309 311 312 314 315 315 315 315 316 317 318 320 320 320 321 322 324 326 327 328 330 332 333 334 335 335 335 336 336 338 339 340 341 343 344 344 344 345 347 349 351 353 353 354 355 356 356 357 358 359 360 360 362 364 365 365 366 366 368 368 369 370 372 373 375 376 377 377 379 381 382 384 385 386 386 388 389 391 393 395 397 399 399 400 401 403 404 404 405 407 407 407 408 410 412 413 413 414 416 418 420 421 422 423 424 424 424 424 426 426 428 429 430 430 430 431 433 434 436 438 439 439 441 443 443 445 445 445 445 446 446 447 447 449 451 451 453 454 454 456 457 459 461 463 465 467 467 467 467 468 469 469 469 471 473 475 475 476 478 480 481 482 483 484 486 487 488 489 490 491 491 493 494 494 494 495 496 497 498 498 499 500 502 504 505 506 506 508 508 509 509 511 513 515 517 519 521 523 524 525",
     "output": "AABBABBBBAABAABAABAAABABBAABBBAABBBBBBBBAAAABAAAAAABABAABAAABAAAAABAABAAABBAABAABBAABAABABABBABBBBAAAAAABBAABBAABBAABBBBAAAAAABBBBBAAABAABAABBABAAABAAAABABABABBAABAAAABAABBAABAAAAAAABBAABBBAAAABABBABAAABAABBABAAAABABAAAABABBBAABAABBAAABBABAABBABAABAAABAABAABBAABBBBAAAABABBABABAABBBABBAABBAAABABABAABAAAAABBBBAAABBABAAABAAABABBABAABAAABBBAAAABABABABAABAAABBBAABBAAAABBAAAAABBAAAAAAABABAABBAABBAAABBAAAABAABBBABAABBBAAAAAABAABABBBABBBAABAABAAAAAAABBBABBBAAABAAAABAAAABAABBAABBBAABBAAAAABBAABBAAAAAAAAB",
     "hidden": true
    }
   ]
  },
  {
   "id": "fs2",
   "title": "HTML Tag Validator",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Given a line containing only HTML tags (no text), check whether the tags are properly nested. Tags look like <div>, </div> or self-closing <br/> (self-closing tags need no match). Tag names are lowercase letters/digits. Number the tags 1..T from left to right (self-closing tags included). If valid print VALID. Otherwise print INVALID k, where k is the 1-based index of the first closing tag that does not match the most recently opened tag; if every closing tag matches but some tags remain unclosed at the end, print INVALID T+1.",
   "input": "One line: the tag string",
   "output": "VALID or INVALID k",
   "constraints": "1 <= T <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "<div><p></p></div>",
     "output": "VALID",
     "hidden": false
    },
    {
     "input": "<div><p></div></p>",
     "output": "INVALID 3",
     "hidden": false
    },
    {
     "input": "<ul><li></li><br/><li></li>",
     "output": "INVALID 7",
     "hidden": true
    },
    {
     "input": "<hr/><table><a><b></b><b></b></a><div><h1><br/></h1><section></section></div></table><a><h1><b></b><span><hr/></span><li></li></h1><b><section></section><br/><h1></h1></b></a>",
     "output": "VALID",
     "hidden": true
    },
    {
     "input": "<a><hr/><span><hr/><br/></span><img/></a><li><span><p><ul></ul><section></section></p><h1><a></a><b></b><p></p></h1><span><ul><br/></ul></span></span><li><h1><section></section></h1></a></li></li>",
     "output": "INVALID 36",
     "hidden": true
    },
    {
     "input": "<table><b><p><b><p><br/></p><img/><h1></h1></b><span><br/><span><br/></span></span></p><hr/></b></table><a><section><section><ul><a><br/></a><p></p><ul></ul></ul><li><a></a></li><a><span><img/></span><section></section><h1></h1></a></section></section><br/><a><div><b><b><hr/></b></b></div></a></a>",
     "output": "VALID",
     "hidden": true
    },
    {
     "input": "<ul><section><span><br/><hr/><section><hr/></section></span></section><b><section><ul><br/><img/></ul></section><section><span></span><a></a><p></p></section><span><ul><img/></ul><b><img/></b><hr/></span></b><h1><b><hr/><li><br/></li></b><table><table></table><div></div><p></p></table><span><section><br/></p></li></li><section></section></span></h1></ul><hr/><br/>",
     "output": "INVALID 54",
     "hidden": true
    }
   ]
  }
 ],
 "ds": [
  {
   "id": "ds1",
   "title": "Median of Every Sliding Window",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Given an array of N integers and a window size K, output the median of every contiguous window of size K. For even K use the LOWER median, i.e. the element at index (K-1)//2 of the sorted window (0-based).",
   "input": "Line 1: N K\nLine 2: N integers",
   "output": "N-K+1 integers separated by spaces",
   "constraints": "1 <= K <= N <= 100000, -10^9 <= a[i] <= 10^9",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "5 3\n1 3 -1 -3 5",
     "output": "1 -1 -1",
     "hidden": false
    },
    {
     "input": "6 4\n5 2 8 1 9 3",
     "output": "2 2 3",
     "hidden": false
    },
    {
     "input": "20 4\n6 48 6 43 -12 -18 7 44 29 2 10 -13 -10 -29 -37 28 20 -47 -24 -23",
     "output": "6 6 -12 -12 -12 7 7 10 2 -10 -13 -29 -29 -29 -37 -24 -24",
     "hidden": true
    },
    {
     "input": "40 7\n39 -13 41 47 1 -22 38 35 -9 -29 -38 -21 -1 -34 26 -8 32 18 0 -24 28 20 -12 19 18 -2 38 -17 -6 7 -19 -28 15 -12 -46 44 29 -25 -12 -29",
     "output": "38 35 35 1 -9 -21 -9 -21 -21 -21 -8 -1 0 0 18 18 18 18 18 18 19 18 -2 7 -2 -6 -6 -12 -12 -12 -12 -12 -12 -12",
     "hidden": true
    },
    {
     "input": "1 1\n7",
     "output": "7",
     "hidden": true
    },
    {
     "input": "100 10\n5 35 24 -34 6 -2 31 13 37 -43 28 -11 44 -46 26 15 -7 21 -12 2 -22 38 30 18 15 -14 35 28 14 -6 -6 46 -1 17 -22 -49 3 17 4 -1 29 -4 -19 21 24 -2 -5 45 -47 -37 -20 -23 -28 12 29 0 10 -30 5 15 -26 -3 -47 19 -40 -38 -36 -23 0 -35 8 26 -6 31 16 30 -38 3 -20 -9 -11 -50 -38 -42 47 -7 34 -31 8 30 2 -38 32 -37 -26 20 12 -7 26 -27",
     "output": "6 13 6 6 6 13 15 13 15 -7 2 -7 2 2 15 15 2 15 15 15 15 15 15 14 14 -1 -1 -1 -1 -1 -1 3 -1 -1 -1 3 3 -1 -1 -2 -4 -5 -19 -20 -20 -20 -20 -20 -23 -20 0 0 0 0 0 -3 -26 -30 -26 -26 -35 -35 -35 -23 -23 -6 0 0 3 3 3 -6 -9 -11 -20 -20 -20 -11 -20 -11 -11 -7 -7 2 2 -7 2 2 2 2 -7",
     "hidden": true
    },
    {
     "input": "300 25\n-35 -39 -6 -20 -31 6 9 -38 20 4 46 -34 -39 -48 37 9 4 -42 6 13 -43 7 10 -6 45 -38 -44 2 -27 4 31 -42 -18 41 19 17 -19 4 -37 -6 -29 -49 -32 27 27 -11 -17 49 5 50 -37 38 -22 -4 46 -41 2 31 -40 23 48 29 -17 -10 4 28 24 -11 -21 44 27 17 -27 17 3 -18 -46 21 28 -18 17 8 -13 2 44 -17 -24 40 48 43 25 6 -30 -5 16 -11 -17 -11 -36 27 -19 -50 -25 26 26 -7 39 -10 43 31 -35 34 -7 1 32 4 28 9 27 -2 36 -37 -3 5 46 37 7 24 -9 22 -2 -5 -49 47 -5 -1 44 -6 -18 50 11 -49 -4 2 9 -45 27 -48 40 -13 19 19 -44 -36 48 -8 5 -17 -1 -12 40 -18 -50 -24 -23 -43 -41 -21 -28 -44 40 -4 29 19 8 -37 36 28 18 16 31 29 -44 -13 -34 -37 3 -21 -36 38 -42 -37 -41 25 44 42 -1 -46 -33 6 21 44 -47 46 48 -14 2 -3 21 36 6 -26 -44 3 -11 -31 -16 31 18 -29 27 0 41 -44 -42 8 23 2 11 6 31 31 -32 50 -50 -14 49 49 -38 -34 5 -26 -16 44 9 17 29 -31 -24 -9 -30 47 38 -13 -47 -37 -26 9 -1 -41 -4 0 -41 -49 -4 23 35 -39 -15 20 -22 -26 -7 -18 -39 -12 18 21 -36 19 -41 38 -22 9 21 -6 50 50 -33 -29 -31 -26 20 -18 37 -35 -1 -18 25 32",
     "output": "4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 -6 -6 -6 -6 -6 -6 -6 -6 -6 -6 2 -6 -4 -4 -6 -4 2 -4 -4 -4 2 -4 -4 2 4 5 5 4 4 5 17 5 17 4 4 3 4 17 4 17 17 8 8 8 4 3 4 8 17 17 8 8 8 8 6 3 3 2 2 2 2 -5 -5 2 -5 -5 -5 -5 -5 -5 6 -5 -5 -5 -5 -5 1 4 1 4 4 4 5 5 9 9 24 9 9 9 7 7 7 5 5 5 5 5 5 7 5 -1 -1 2 -1 2 2 2 -1 -1 -1 -2 -2 -2 -4 -1 -1 -1 -1 -1 -4 -4 -4 -8 -12 -12 -13 -17 -18 -17 -17 -13 -13 -12 -17 -17 -12 -8 -8 -4 -4 -4 -12 -13 -18 -13 -13 -13 -4 -4 -4 -4 3 8 8 8 3 -1 -1 3 3 -1 -1 -1 -13 -13 -3 -1 2 3 2 2 3 2 2 2 3 3 2 2 2 3 3 2 2 2 2 2 2 3 6 6 6 3 2 3 6 6 6 6 6 5 5 6 6 8 6 6 6 5 5 6 5 -9 -13 -14 -13 -13 -13 -9 -9 -13 -13 -9 -9 -4 -4 -9 -9 -13 -15 -13 -13 -15 -13 -13 -13 -15 -12 -12 -7 -12 -12 -7 -7 -7 -6 -6 -7 -12 -15 -12 -12 -12 -12 -7 -12 -6 -1",
     "hidden": true
    }
   ]
  },
  {
   "id": "ds2",
   "title": "Covered Time Ranges",
   "difficulty": "Hard",
   "type": "code",
   "desc": "You are given N half-open intervals [l, r) of timestamps. Two intervals that overlap OR touch (next.l <= current.r) belong to the same merged range. Print the number of merged ranges and the total covered length (sum of r - l over merged ranges).",
   "input": "Line 1: N\nNext N lines: l r (l < r)",
   "output": "Two integers: number_of_merged_ranges total_covered_length",
   "constraints": "1 <= N <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "3\n1 3\n2 6\n8 10",
     "output": "2 7",
     "hidden": false
    },
    {
     "input": "4\n1 2\n2 3\n5 6\n6 9",
     "output": "2 6",
     "hidden": false
    },
    {
     "input": "10\n30 36\n12 16\n48 51\n23 31\n4 15\n38 41\n39 44\n34 35\n35 41\n14 19",
     "output": "3 39",
     "hidden": true
    },
    {
     "input": "25\n60 81\n4 14\n19 28\n58 71\n91 95\n26 36\n15 24\n86 100\n9 25\n40 50\n38 43\n89 91\n8 18\n96 110\n11 18\n83 90\n69 70\n3 14\n25 26\n80 91\n12 21\n63 80\n52 63\n69 89\n28 30",
     "output": "3 103",
     "hidden": true
    },
    {
     "input": "1\n0 5",
     "output": "1 5",
     "hidden": true
    },
    {
     "input": "100\n366 540\n589 773\n504 680\n500 677\n439 455\n640 807\n350 443\n206 345\n960 1026\n568 731\n537 626\n816 920\n550 746\n82 245\n663 858\n806 812\n443 563\n955 1130\n53 218\n612 623\n483 521\n888 1057\n484 588\n123 306\n937 1103\n882 974\n980 1012\n270 301\n248 357\n230 396\n212 284\n218 336\n978 1154\n9 41\n39 229\n994 1130\n486 576\n176 277\n923 1088\n135 186\n718 873\n308 354\n315 508\n441 515\n432 544\n569 680\n205 228\n406 503\n869 964\n895 951\n622 762\n756 909\n586 783\n721 847\n268 466\n324 507\n244 432\n908 1098\n873 1074\n338 479\n91 141\n757 826\n191 212\n471 517\n225 410\n792 850\n952 1032\n637 742\n477 594\n43 114\n874 1059\n906 981\n710 734\n645 657\n282 482\n475 562\n712 730\n779 879\n910 1045\n523 634\n762 843\n428 452\n122 301\n702 774\n122 303\n56 190\n886 920\n253 337\n829 977\n935 1017\n971 1029\n271 429\n689 759\n13 187\n290 334\n579 650\n794 918\n285 403\n530 723\n735 925",
     "output": "1 1145",
     "hidden": true
    },
    {
     "input": "200\n9 27\n16 25\n34 47\n1 7\n50 53\n79 91\n51 69\n88 89\n94 112\n0 3\n7 8\n91 93\n80 91\n81 86\n2 3\n62 64\n98 99\n75 79\n56 58\n25 45\n19 35\n25 33\n4 16\n57 59\n25 27\n39 56\n64 80\n57 74\n88 92\n53 66\n9 13\n39 52\n30 42\n10 13\n0 6\n3 11\n65 73\n4 6\n39 40\n80 87\n0 1\n39 45\n49 56\n96 111\n11 25\n63 67\n43 55\n22 41\n31 33\n10 15\n53 68\n5 22\n90 93\n100 105\n99 119\n57 73\n2 13\n100 116\n77 83\n74 94\n21 28\n76 93\n8 15\n25 41\n7 12\n62 66\n65 79\n15 27\n71 75\n17 36\n76 96\n13 23\n62 63\n85 98\n60 71\n40 49\n69 80\n7 21\n50 58\n42 46\n50 66\n53 70\n18 29\n74 89\n25 34\n70 73\n17 26\n15 30\n87 93\n48 57\n28 42\n50 55\n66 72\n73 74\n84 104\n22 23\n67 72\n90 100\n19 40\n19 20\n95 105\n17 30\n20 37\n28 43\n88 89\n100 120\n81 93\n5 18\n7 28\n15 33\n66 85\n85 103\n57 58\n38 42\n40 44\n59 77\n6 10\n29 37\n95 116\n18 29\n22 35\n75 87\n95 109\n93 100\n82 98\n67 72\n59 72\n88 90\n82 99\n17 21\n88 107\n51 72\n13 19\n12 19\n67 79\n51 53\n58 60\n2 8\n16 23\n69 82\n97 116\n50 70\n42 49\n33 41\n16 32\n37 50\n40 51\n4 7\n25 37\n15 17\n93 95\n55 62\n92 108\n9 25\n9 30\n15 21\n97 106\n28 36\n80 92\n9 23\n43 61\n46 48\n76 94\n83 97\n69 70\n98 102\n41 50\n27 31\n49 52\n5 12\n80 81\n18 24\n44 45\n20 24\n45 51\n0 12\n91 95\n10 19\n68 73\n76 97\n32 36\n65 72\n36 40\n72 73\n67 72\n27 44\n51 72\n8 16\n47 52\n93 97\n92 97\n23 29\n27 44\n85 98\n26 42\n68 83\n62 75\n5 15\n91 92\n46 56",
     "output": "1 120",
     "hidden": true
    }
   ]
  }
 ],
 "cc": [
  {
   "id": "cc1",
   "title": "Auto-Scaler Capacity Planner",
   "difficulty": "Hard",
   "type": "code",
   "desc": "N requests each occupy a server slot during [start, end) (end exclusive, so a request ending at t frees its slot before a request starting at t). Each server can handle C concurrent requests. Print: the minimum number of servers required, the peak concurrency, and the earliest time at which peak concurrency is reached.",
   "input": "Line 1: N C\nNext N lines: start end (start < end)",
   "output": "Three integers: servers peak first_peak_time",
   "constraints": "1 <= N <= 100000, 1 <= C <= 10^6",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "4 2\n1 5\n2 6\n3 4\n5 7",
     "output": "2 3 3",
     "hidden": false
    },
    {
     "input": "3 1\n0 2\n2 4\n4 6",
     "output": "1 1 0",
     "hidden": false
    },
    {
     "input": "10 3\n29 32\n9 16\n16 22\n9 20\n4 9\n4 12\n13 18\n26 28\n20 23\n19 30",
     "output": "1 3 9",
     "hidden": true
    },
    {
     "input": "30 4\n56 72\n19 28\n46 67\n28 41\n25 27\n17 32\n5 13\n39 47\n25 27\n42 54\n21 22\n18 37\n25 37\n60 75\n0 19\n26 28\n21 35\n16 24\n14 21\n32 47\n59 79\n10 23\n34 50\n29 33\n0 20\n48 68\n25 35\n16 26\n25 45\n19 21",
     "output": "3 10 25",
     "hidden": true
    },
    {
     "input": "1 5\n10 20",
     "output": "1 1 10",
     "hidden": true
    },
    {
     "input": "100 7\n62 121\n45 49\n80 134\n138 170\n32 86\n99 100\n122 166\n99 164\n151 200\n90 101\n104 143\n139 147\n127 150\n11 43\n146 202\n43 67\n8 65\n104 147\n63 127\n22 37\n1 5\n199 266\n153 217\n104 107\n7 30\n193 259\n32 54\n3 67\n4 16\n160 215\n157 176\n158 225\n66 106\n47 111\n132 151\n13 62\n187 207\n70 105\n55 64\n119 176\n69 124\n98 133\n53 75\n160 187\n28 84\n178 239\n112 170\n152 173\n21 58\n23 71\n55 93\n76 133\n164 215\n112 130\n164 209\n44 53\n136 141\n53 81\n43 53\n32 88\n180 231\n130 184\n151 172\n42 102\n22 51\n134 159\n197 213\n44 79\n190 253\n23 71\n170 174\n171 188\n163 211\n38 62\n14 77\n75 97\n86 136\n82 146\n145 210\n48 109\n24 87\n178 230\n55 93\n83 103\n110 115\n181 236\n184 218\n80 81\n18 28\n74 122\n156 193\n105 110\n146 202\n92 129\n84 90\n7 66\n161 196\n182 249\n82 97\n72 87",
     "output": "4 23 48",
     "hidden": true
    },
    {
     "input": "200 10\n0 15\n106 137\n32 133\n190 245\n21 55\n14 85\n101 161\n261 355\n36 114\n169 252\n215 224\n7 17\n31 46\n294 385\n172 264\n146 180\n158 207\n33 80\n52 98\n249 294\n126 206\n68 165\n35 42\n87 132\n148 222\n19 100\n84 168\n33 104\n258 338\n30 67\n299 377\n169 201\n38 77\n91 120\n248 329\n117 145\n195 278\n289 386\n227 300\n163 176\n213 281\n167 204\n72 107\n236 275\n135 228\n260 262\n170 245\n136 214\n256 262\n193 241\n187 254\n181 237\n70 167\n167 191\n273 308\n165 264\n222 232\n266 320\n109 143\n14 97\n176 228\n41 69\n190 254\n185 188\n210 285\n146 167\n212 296\n197 280\n276 361\n61 144\n157 242\n107 139\n38 98\n41 76\n113 202\n14 77\n140 199\n230 287\n197 222\n284 351\n206 290\n290 300\n275 277\n157 252\n139 149\n266 322\n34 64\n129 135\n218 297\n160 215\n116 130\n138 163\n298 386\n184 220\n206 304\n56 122\n30 124\n228 326\n179 228\n224 293\n57 121\n74 163\n143 233\n198 250\n151 161\n87 106\n6 30\n256 291\n280 324\n65 151\n170 241\n11 32\n188 269\n238 336\n227 296\n32 95\n193 260\n262 326\n261 294\n292 366\n300 352\n61 124\n234 304\n176 217\n251 295\n210 265\n5 101\n190 237\n149 232\n270 295\n210 273\n30 100\n279 372\n252 317\n173 198\n35 86\n95 129\n155 222\n233 242\n250 308\n133 200\n102 155\n142 148\n102 120\n6 16\n290 302\n226 248\n70 149\n27 54\n167 226\n174 179\n160 228\n21 82\n251 311\n259 303\n154 200\n243 319\n44 48\n56 106\n298 372\n91 170\n109 204\n271 296\n71 129\n45 107\n143 184\n63 157\n140 168\n163 179\n60 102\n294 321\n255 337\n263 321\n96 148\n207 269\n156 218\n38 78\n239 265\n70 99\n46 68\n138 186\n69 168\n281 344\n245 260\n115 138\n229 264\n128 130\n151 180\n20 94\n212 248\n88 155\n81 121\n105 121\n153 181\n100 144\n295 307\n262 360\n105 171\n51 133\n148 238",
     "output": "5 43 197",
     "hidden": true
    }
   ]
  },
  {
   "id": "cc2",
   "title": "Microservice Deployment Order",
   "difficulty": "Hard",
   "type": "code",
   "desc": "There are N services numbered 1..N and M dependencies 'a b' meaning service a must be deployed BEFORE service b. Print a valid deployment order. If several orders are valid print the lexicographically smallest one (compare as sequences of integers). If the dependencies contain a cycle print CYCLE.",
   "input": "Line 1: N M\nNext M lines: a b",
   "output": "N integers separated by spaces, or CYCLE",
   "constraints": "1 <= N <= 100000, 0 <= M <= 200000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "4 3\n1 2\n1 3\n3 4",
     "output": "1 2 3 4",
     "hidden": false
    },
    {
     "input": "3 3\n1 2\n2 3\n3 1",
     "output": "CYCLE",
     "hidden": false
    },
    {
     "input": "8 10\n1 7\n3 4\n7 6\n8 4\n1 5\n8 6\n2 7\n8 1\n5 7\n1 6",
     "output": "2 3 8 1 4 5 7 6",
     "hidden": true
    },
    {
     "input": "12 16\n4 3\n12 9\n3 2\n11 7\n8 3\n5 9\n4 1\n5 6\n1 11\n11 1\n8 5\n10 7\n12 2\n10 2\n4 12\n4 2",
     "output": "CYCLE",
     "hidden": true
    },
    {
     "input": "3 0",
     "output": "1 2 3",
     "hidden": true
    },
    {
     "input": "20 40\n16 17\n2 20\n20 10\n14 19\n3 4\n2 8\n9 12\n7 4\n15 20\n16 19\n15 18\n1 15\n16 11\n17 20\n16 15\n1 3\n8 12\n1 14\n6 10\n7 8\n6 8\n7 20\n14 8\n13 9\n7 10\n15 11\n6 12\n13 17\n6 9\n2 9\n2 6\n17 14\n7 6\n2 18\n3 8\n5 9\n1 20\n3 10\n13 14\n3 12",
     "output": "1 2 3 5 7 4 6 13 9 16 15 11 17 14 8 12 18 19 20 10",
     "hidden": true
    },
    {
     "input": "30 61\n22 16\n29 20\n12 7\n27 11\n26 24\n27 22\n19 25\n8 15\n25 28\n3 6\n3 8\n18 30\n17 27\n30 28\n26 4\n12 6\n7 30\n12 19\n30 25\n21 2\n27 28\n11 20\n6 23\n24 23\n14 12\n7 9\n5 14\n5 26\n21 15\n23 1\n21 7\n11 25\n30 20\n14 22\n15 16\n4 2\n5 11\n28 1\n19 30\n12 17\n6 19\n18 2\n22 20\n3 27\n6 22\n23 20\n30 2\n12 24\n1 23\n5 29\n27 9\n6 2\n26 1\n12 11\n14 24\n7 2\n8 28\n17 11\n8 30\n26 6\n22 18",
     "output": "CYCLE",
     "hidden": true
    }
   ]
  }
 ],
 "ai": [
  {
   "id": "ai1",
   "title": "k-Nearest Neighbours Classifier",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Training set: N labelled 2-D integer points (x y label). For each of Q query points, find the K nearest training points by SQUARED Euclidean distance (ties in distance broken by smaller training index). Predict the label that appears most among those K neighbours; if labels tie, predict the smaller label.",
   "input": "Line 1: N K Q\nNext N lines: x y label\nNext Q lines: x y",
   "output": "Q lines, each the predicted label",
   "constraints": "1 <= K <= N <= 2000, 1 <= Q <= 2000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "4 3 1\n0 0 0\n1 1 0\n5 5 1\n6 6 1\n2 2",
     "output": "0",
     "hidden": false
    },
    {
     "input": "3 2 2\n0 0 1\n10 10 2\n5 5 1\n4 4\n9 9",
     "output": "1\n1",
     "hidden": false
    },
    {
     "input": "15 3 6\n13 25 2\n11 30 1\n1 9 0\n19 24 1\n28 27 1\n9 0 0\n11 5 0\n18 13 0\n15 13 0\n17 29 1\n10 6 1\n3 22 2\n28 1 1\n15 1 2\n25 28 1\n13 26\n2 23\n7 15\n10 1\n8 30\n24 19",
     "output": "1\n2\n0\n0\n1\n1",
     "hidden": true
    },
    {
     "input": "30 5 10\n21 18 1\n22 26 2\n3 12 0\n30 21 0\n30 12 2\n5 9 2\n5 3 2\n14 25 2\n0 14 2\n28 16 2\n15 9 1\n23 8 2\n21 26 0\n17 21 2\n20 25 1\n22 10 0\n4 5 2\n10 29 0\n20 8 0\n24 10 0\n29 28 2\n14 13 0\n8 6 1\n6 17 0\n25 14 0\n25 2 1\n28 17 0\n19 19 1\n12 16 0\n24 22 1\n5 2\n29 0\n8 16\n3 1\n7 29\n10 26\n5 9\n15 16\n14 11\n6 1",
     "output": "2\n0\n0\n2\n0\n0\n2\n0\n0\n2",
     "hidden": true
    },
    {
     "input": "10 4 5\n1 11 0\n5 27 2\n19 15 2\n26 23 1\n29 29 1\n14 9 2\n17 15 2\n2 1 2\n2 0 2\n3 1 0\n6 4\n1 19\n30 23\n6 1\n13 11",
     "output": "0\n2\n1\n0\n2",
     "hidden": true
    },
    {
     "input": "60 7 15\n25 8 1\n27 29 1\n2 4 0\n15 24 1\n5 28 2\n22 15 2\n29 25 0\n1 22 1\n11 27 0\n6 29 0\n12 3 2\n17 3 1\n24 24 1\n27 6 0\n14 12 0\n1 2 0\n2 5 2\n1 22 1\n12 28 1\n3 4 0\n20 10 1\n29 18 2\n24 26 0\n22 4 2\n4 10 0\n15 21 2\n25 1 0\n8 13 1\n14 13 0\n4 30 1\n11 22 0\n8 18 0\n6 21 2\n17 3 0\n8 22 2\n12 21 0\n1 6 0\n25 29 1\n24 20 2\n24 17 0\n20 4 1\n3 12 2\n26 6 0\n27 18 0\n17 10 0\n1 30 0\n5 18 1\n23 19 0\n9 9 0\n3 28 1\n7 3 0\n10 30 1\n23 15 0\n3 0 2\n30 26 0\n28 22 1\n14 23 2\n24 18 2\n29 27 1\n3 19 2\n10 6\n1 19\n27 10\n11 4\n3 28\n20 3\n24 2\n24 3\n13 16\n15 22\n4 17\n20 10\n8 1\n3 22\n10 28",
     "output": "0\n1\n0\n0\n1\n0\n0\n0\n0\n0\n1\n0\n0\n1\n0",
     "hidden": true
    },
    {
     "input": "100 9 20\n13 14 0\n3 27 1\n27 3 0\n27 5 2\n3 30 2\n3 28 1\n17 8 1\n11 11 2\n20 30 2\n28 8 2\n2 19 1\n15 1 2\n24 6 1\n26 0 2\n17 7 2\n29 18 1\n7 20 2\n9 29 2\n2 27 2\n29 3 2\n0 15 0\n2 26 1\n15 17 1\n18 25 2\n20 4 0\n30 27 1\n27 0 1\n23 22 2\n2 16 0\n11 21 0\n10 28 2\n1 2 2\n3 26 2\n25 12 1\n4 1 0\n7 20 1\n12 16 1\n4 0 0\n9 1 1\n12 9 0\n11 4 1\n18 15 1\n0 10 0\n7 12 1\n12 4 2\n24 22 0\n1 3 0\n0 17 1\n10 30 0\n1 15 0\n24 22 0\n22 20 0\n11 22 0\n15 19 0\n0 3 1\n4 28 1\n3 24 1\n5 4 1\n23 10 2\n25 18 1\n18 27 0\n8 11 0\n18 22 0\n20 2 0\n2 6 2\n0 0 2\n20 23 0\n13 8 2\n8 1 2\n17 3 2\n13 19 1\n20 6 1\n1 29 1\n27 12 0\n6 5 1\n19 23 1\n20 11 2\n26 13 2\n21 22 1\n18 18 1\n20 3 1\n18 8 1\n9 7 0\n3 23 0\n15 26 1\n30 4 2\n26 10 1\n10 25 1\n21 1 2\n1 1 2\n7 1 0\n9 11 1\n18 7 1\n4 19 1\n10 1 1\n14 14 0\n30 18 1\n8 25 0\n11 3 1\n23 6 2\n3 10\n18 12\n8 30\n22 23\n2 1\n6 23\n8 23\n1 15\n10 3\n5 4\n28 28\n17 20\n0 16\n23 10\n30 27\n13 20\n23 19\n27 1\n7 27\n12 27",
     "output": "0\n1\n1\n0\n2\n1\n0\n0\n1\n0\n0\n1\n0\n1\n1\n1\n0\n2\n1\n0",
     "hidden": true
    }
   ]
  },
  {
   "id": "ai2",
   "title": "Maze Runner with One Wall Break",
   "difficulty": "Hard",
   "type": "code",
   "desc": "You are given an R x C grid of '.' (free) and '#' (wall). Start at the top-left cell and reach the bottom-right cell moving up/down/left/right. You may break through AT MOST ONE wall cell during the journey (stepping onto a '#' cell uses your break). Print the minimum number of moves, or -1 if impossible. The start and end cells are always '.'.",
   "input": "Line 1: R C\nNext R lines: the grid rows",
   "output": "A single integer",
   "constraints": "1 <= R, C <= 300",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "3 3\n.#.\n##.\n...",
     "output": "4",
     "hidden": false
    },
    {
     "input": "2 2\n.#\n#.",
     "output": "2",
     "hidden": false
    },
    {
     "input": "5 5\n..#..\n.....\n###..\n#..#.\n...#.",
     "output": "8",
     "hidden": true
    },
    {
     "input": "8 8\n...###.#\n....#..#\n.#.#....\n.#.#...#\n#..#####\n..#.....\n.###..#.\n##.#.##.",
     "output": "14",
     "hidden": true
    },
    {
     "input": "1 1\n.",
     "output": "0",
     "hidden": true
    },
    {
     "input": "15 15\n.....#..#..##..\n......#.##.#.#.\n.#.#.#..#.#.###\n.##..##.#.#.#..\n..##..##.#....#\n###.#.###..###.\n##.#####.##..#.\n#.#...#.#..##.#\n###...###..#.#.\n..###.#.....###\n###...###.....#\n.#.#.##.##....#\n.#....#..#####.\n..##......##.#.\n#..#...##.#.#..",
     "output": "-1",
     "hidden": true
    },
    {
     "input": "20 25\n..#..#.##.....#..##.####.\n###..###...####....#.#...\n..#..#..####.#..#...####.\n######..######...#.#.....\n.#..#....##..##.##.#####.\n##.#.########...#....##..\n#####..#.###.#..##.##..##\n#....#.#..########..#.#.#\n...##############..#.####\n###.....###.#.#.#..##.###\n.#.##..###..#...##..##..#\n..##..#...###....#.##..#.\n####.#.#..#....#..##.#...\n.##.##.#....###.#.####.#.\n#..#.##..#.#..#.##.#..##.\n..##.#.####..#....##..##.\n#..#..#.#.#.#####.#....##\n#...#....#..###..###.#.#.\n##.##.##.###.....#.##.##.\n#....#....####..##..#..#.",
     "output": "-1",
     "hidden": true
    }
   ]
  }
 ],
 "cs": [
  {
   "id": "cs1",
   "title": "Brute-Force Login Detector",
   "difficulty": "Hard",
   "type": "code",
   "desc": "You get N log lines 'time ip status' sorted by time (seconds). status is OK or FAIL. An IP is flagged if there exist at least T FAIL events from that IP whose times all lie within a span of at most W seconds (max time - min time <= W). Print flagged IPs in lexicographic (string) order, one per line, or NONE.",
   "input": "Line 1: N W T\nNext N lines: time ip status",
   "output": "Flagged IPs one per line, or NONE",
   "constraints": "1 <= N <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "6 5 3\n1 1.1.1.1 FAIL\n2 1.1.1.1 FAIL\n3 2.2.2.2 FAIL\n4 1.1.1.1 FAIL\n20 2.2.2.2 FAIL\n21 2.2.2.2 OK",
     "output": "1.1.1.1",
     "hidden": false
    },
    {
     "input": "3 1 2\n1 5.5.5.5 FAIL\n10 5.5.5.5 FAIL\n30 5.5.5.5 FAIL",
     "output": "NONE",
     "hidden": false
    },
    {
     "input": "30 10 3\n2 10.0.0.3 FAIL\n4 10.0.0.1 FAIL\n5 10.0.0.1 OK\n11 10.0.0.2 FAIL\n15 10.0.0.3 FAIL\n18 10.0.0.2 FAIL\n19 10.0.0.4 FAIL\n19 10.0.0.1 FAIL\n24 10.0.0.4 FAIL\n26 10.0.0.3 FAIL\n32 10.0.0.4 FAIL\n33 10.0.0.3 FAIL\n39 10.0.0.1 FAIL\n44 10.0.0.4 FAIL\n48 10.0.0.4 FAIL\n49 10.0.0.3 FAIL\n54 10.0.0.4 FAIL\n54 10.0.0.2 FAIL\n59 10.0.0.3 FAIL\n63 10.0.0.1 FAIL\n67 10.0.0.1 FAIL\n67 10.0.0.4 FAIL\n73 10.0.0.1 FAIL\n79 10.0.0.2 FAIL\n85 10.0.0.2 FAIL\n89 10.0.0.4 OK\n90 10.0.0.1 FAIL\n95 10.0.0.3 FAIL\n101 10.0.0.2 FAIL\n104 10.0.0.3 OK",
     "output": "10.0.0.1\n10.0.0.4",
     "hidden": true
    },
    {
     "input": "60 8 4\n6 10.0.0.4 FAIL\n10 10.0.0.4 FAIL\n14 10.0.0.3 FAIL\n15 10.0.0.3 OK\n16 10.0.0.2 OK\n18 10.0.0.5 FAIL\n24 10.0.0.3 OK\n29 10.0.0.4 FAIL\n30 10.0.0.3 OK\n31 10.0.0.3 FAIL\n37 10.0.0.3 FAIL\n38 10.0.0.4 FAIL\n39 10.0.0.3 FAIL\n39 10.0.0.3 FAIL\n40 10.0.0.4 OK\n46 10.0.0.3 FAIL\n46 10.0.0.2 FAIL\n52 10.0.0.5 OK\n58 10.0.0.3 FAIL\n58 10.0.0.4 FAIL\n58 10.0.0.2 FAIL\n60 10.0.0.1 FAIL\n60 10.0.0.3 OK\n60 10.0.0.4 FAIL\n62 10.0.0.1 OK\n65 10.0.0.3 OK\n70 10.0.0.5 OK\n70 10.0.0.1 FAIL\n74 10.0.0.3 FAIL\n76 10.0.0.2 FAIL\n81 10.0.0.4 FAIL\n83 10.0.0.1 FAIL\n84 10.0.0.4 FAIL\n89 10.0.0.5 FAIL\n95 10.0.0.4 FAIL\n100 10.0.0.5 OK\n101 10.0.0.5 FAIL\n106 10.0.0.4 OK\n111 10.0.0.5 FAIL\n115 10.0.0.3 OK\n121 10.0.0.4 FAIL\n127 10.0.0.2 OK\n130 10.0.0.3 FAIL\n135 10.0.0.2 FAIL\n140 10.0.0.1 FAIL\n143 10.0.0.4 FAIL\n148 10.0.0.5 FAIL\n154 10.0.0.2 OK\n157 10.0.0.4 OK\n162 10.0.0.3 FAIL\n162 10.0.0.5 FAIL\n165 10.0.0.3 FAIL\n166 10.0.0.4 FAIL\n168 10.0.0.5 OK\n169 10.0.0.2 FAIL\n174 10.0.0.4 FAIL\n176 10.0.0.1 FAIL\n180 10.0.0.2 FAIL\n184 10.0.0.3 FAIL\n190 10.0.0.2 OK",
     "output": "10.0.0.3",
     "hidden": true
    },
    {
     "input": "40 2 5\n4 10.0.0.2 FAIL\n9 10.0.0.1 OK\n15 10.0.0.2 FAIL\n16 10.0.0.2 FAIL\n17 10.0.0.3 OK\n19 10.0.0.3 OK\n19 10.0.0.1 OK\n20 10.0.0.3 OK\n23 10.0.0.3 OK\n27 10.0.0.2 FAIL\n30 10.0.0.2 OK\n32 10.0.0.2 OK\n33 10.0.0.3 OK\n36 10.0.0.3 FAIL\n36 10.0.0.3 FAIL\n41 10.0.0.2 OK\n41 10.0.0.1 OK\n47 10.0.0.1 OK\n53 10.0.0.3 FAIL\n59 10.0.0.3 OK\n61 10.0.0.1 FAIL\n64 10.0.0.3 FAIL\n66 10.0.0.3 OK\n68 10.0.0.3 OK\n68 10.0.0.1 FAIL\n69 10.0.0.3 FAIL\n73 10.0.0.3 FAIL\n73 10.0.0.3 OK\n77 10.0.0.1 FAIL\n77 10.0.0.3 FAIL\n81 10.0.0.3 FAIL\n86 10.0.0.2 FAIL\n92 10.0.0.1 FAIL\n94 10.0.0.2 FAIL\n98 10.0.0.2 FAIL\n103 10.0.0.3 FAIL\n103 10.0.0.1 OK\n106 10.0.0.1 OK\n107 10.0.0.1 OK\n109 10.0.0.2 FAIL",
     "output": "NONE",
     "hidden": true
    },
    {
     "input": "100 15 5\n1 10.0.0.6 FAIL\n2 10.0.0.1 FAIL\n3 10.0.0.2 FAIL\n9 10.0.0.4 FAIL\n15 10.0.0.4 OK\n15 10.0.0.4 FAIL\n18 10.0.0.5 OK\n21 10.0.0.2 FAIL\n27 10.0.0.5 OK\n33 10.0.0.4 FAIL\n37 10.0.0.4 FAIL\n37 10.0.0.2 FAIL\n40 10.0.0.1 FAIL\n42 10.0.0.1 FAIL\n44 10.0.0.4 FAIL\n47 10.0.0.5 FAIL\n49 10.0.0.3 OK\n49 10.0.0.6 FAIL\n52 10.0.0.5 FAIL\n55 10.0.0.4 OK\n57 10.0.0.1 FAIL\n57 10.0.0.2 FAIL\n63 10.0.0.5 FAIL\n66 10.0.0.6 FAIL\n68 10.0.0.4 FAIL\n68 10.0.0.3 FAIL\n70 10.0.0.1 OK\n72 10.0.0.4 FAIL\n75 10.0.0.2 OK\n76 10.0.0.6 FAIL\n81 10.0.0.4 FAIL\n83 10.0.0.2 FAIL\n88 10.0.0.5 FAIL\n89 10.0.0.5 FAIL\n91 10.0.0.4 FAIL\n91 10.0.0.4 FAIL\n96 10.0.0.1 FAIL\n102 10.0.0.5 FAIL\n105 10.0.0.2 FAIL\n108 10.0.0.2 FAIL\n111 10.0.0.4 FAIL\n116 10.0.0.5 FAIL\n118 10.0.0.2 FAIL\n119 10.0.0.4 FAIL\n119 10.0.0.5 FAIL\n120 10.0.0.2 OK\n125 10.0.0.3 FAIL\n125 10.0.0.2 FAIL\n125 10.0.0.4 FAIL\n127 10.0.0.2 FAIL\n130 10.0.0.5 FAIL\n136 10.0.0.2 FAIL\n136 10.0.0.1 FAIL\n136 10.0.0.6 OK\n137 10.0.0.3 OK\n137 10.0.0.1 FAIL\n139 10.0.0.2 FAIL\n143 10.0.0.2 FAIL\n147 10.0.0.5 FAIL\n148 10.0.0.1 FAIL\n150 10.0.0.2 OK\n151 10.0.0.6 OK\n153 10.0.0.2 OK\n154 10.0.0.1 OK\n154 10.0.0.4 FAIL\n158 10.0.0.3 OK\n161 10.0.0.2 FAIL\n162 10.0.0.1 FAIL\n165 10.0.0.4 FAIL\n170 10.0.0.3 FAIL\n176 10.0.0.6 FAIL\n176 10.0.0.4 FAIL\n181 10.0.0.4 FAIL\n181 10.0.0.1 OK\n184 10.0.0.4 OK\n190 10.0.0.2 FAIL\n190 10.0.0.1 OK\n192 10.0.0.6 FAIL\n198 10.0.0.6 FAIL\n203 10.0.0.5 FAIL\n205 10.0.0.2 FAIL\n210 10.0.0.4 OK\n214 10.0.0.3 FAIL\n218 10.0.0.1 OK\n221 10.0.0.4 FAIL\n224 10.0.0.2 FAIL\n226 10.0.0.2 FAIL\n227 10.0.0.1 FAIL\n229 10.0.0.3 OK\n232 10.0.0.1 FAIL\n232 10.0.0.6 FAIL\n234 10.0.0.6 FAIL\n240 10.0.0.4 FAIL\n245 10.0.0.2 OK\n247 10.0.0.3 OK\n247 10.0.0.2 FAIL\n247 10.0.0.6 OK\n248 10.0.0.2 OK\n249 10.0.0.2 FAIL\n255 10.0.0.4 OK",
     "output": "NONE",
     "hidden": true
    },
    {
     "input": "150 5 6\n0 10.0.0.8 FAIL\n6 10.0.0.5 OK\n6 10.0.0.8 FAIL\n8 10.0.0.8 FAIL\n9 10.0.0.5 FAIL\n14 10.0.0.5 OK\n20 10.0.0.3 OK\n21 10.0.0.8 OK\n24 10.0.0.8 FAIL\n26 10.0.0.1 FAIL\n32 10.0.0.2 FAIL\n36 10.0.0.8 FAIL\n41 10.0.0.3 FAIL\n44 10.0.0.1 FAIL\n48 10.0.0.3 OK\n51 10.0.0.6 FAIL\n55 10.0.0.6 FAIL\n57 10.0.0.5 OK\n57 10.0.0.6 FAIL\n62 10.0.0.8 FAIL\n66 10.0.0.4 FAIL\n66 10.0.0.3 FAIL\n70 10.0.0.4 FAIL\n73 10.0.0.2 OK\n76 10.0.0.7 FAIL\n78 10.0.0.8 FAIL\n81 10.0.0.1 OK\n85 10.0.0.5 OK\n88 10.0.0.1 FAIL\n88 10.0.0.5 FAIL\n88 10.0.0.4 FAIL\n93 10.0.0.3 FAIL\n95 10.0.0.2 OK\n97 10.0.0.8 OK\n101 10.0.0.4 OK\n106 10.0.0.5 FAIL\n108 10.0.0.7 FAIL\n111 10.0.0.7 FAIL\n115 10.0.0.4 OK\n120 10.0.0.6 FAIL\n125 10.0.0.4 FAIL\n125 10.0.0.7 FAIL\n130 10.0.0.2 OK\n135 10.0.0.6 FAIL\n138 10.0.0.2 FAIL\n142 10.0.0.6 OK\n142 10.0.0.6 FAIL\n143 10.0.0.6 FAIL\n148 10.0.0.1 FAIL\n154 10.0.0.1 FAIL\n159 10.0.0.5 FAIL\n161 10.0.0.5 OK\n161 10.0.0.5 OK\n163 10.0.0.1 OK\n165 10.0.0.4 FAIL\n166 10.0.0.1 OK\n171 10.0.0.4 FAIL\n172 10.0.0.4 FAIL\n177 10.0.0.7 OK\n180 10.0.0.6 FAIL\n183 10.0.0.4 FAIL\n188 10.0.0.2 FAIL\n189 10.0.0.6 FAIL\n192 10.0.0.1 OK\n198 10.0.0.7 FAIL\n201 10.0.0.5 FAIL\n205 10.0.0.5 FAIL\n207 10.0.0.7 FAIL\n209 10.0.0.4 FAIL\n211 10.0.0.7 FAIL\n212 10.0.0.3 OK\n217 10.0.0.8 FAIL\n220 10.0.0.2 FAIL\n220 10.0.0.2 FAIL\n224 10.0.0.4 OK\n224 10.0.0.5 FAIL\n224 10.0.0.5 FAIL\n225 10.0.0.4 FAIL\n230 10.0.0.7 FAIL\n233 10.0.0.5 FAIL\n239 10.0.0.8 FAIL\n239 10.0.0.6 FAIL\n240 10.0.0.3 FAIL\n242 10.0.0.8 FAIL\n244 10.0.0.8 FAIL\n247 10.0.0.1 FAIL\n249 10.0.0.7 OK\n250 10.0.0.8 FAIL\n254 10.0.0.5 FAIL\n259 10.0.0.7 FAIL\n259 10.0.0.7 FAIL\n260 10.0.0.2 FAIL\n264 10.0.0.7 OK\n266 10.0.0.5 FAIL\n272 10.0.0.8 FAIL\n276 10.0.0.3 FAIL\n282 10.0.0.2 OK\n287 10.0.0.6 FAIL\n292 10.0.0.4 OK\n296 10.0.0.1 OK\n296 10.0.0.3 FAIL\n302 10.0.0.4 FAIL\n306 10.0.0.6 FAIL\n311 10.0.0.1 FAIL\n313 10.0.0.7 FAIL\n317 10.0.0.6 FAIL\n323 10.0.0.1 OK\n324 10.0.0.2 FAIL\n327 10.0.0.5 FAIL\n330 10.0.0.4 OK\n332 10.0.0.6 FAIL\n334 10.0.0.5 OK\n336 10.0.0.1 OK\n342 10.0.0.6 FAIL\n348 10.0.0.7 FAIL\n353 10.0.0.6 FAIL\n355 10.0.0.8 FAIL\n355 10.0.0.5 OK\n357 10.0.0.6 FAIL\n358 10.0.0.1 FAIL\n362 10.0.0.7 FAIL\n362 10.0.0.2 OK\n367 10.0.0.2 OK\n370 10.0.0.2 FAIL\n373 10.0.0.2 FAIL\n376 10.0.0.5 OK\n377 10.0.0.5 FAIL\n377 10.0.0.7 FAIL\n379 10.0.0.1 FAIL\n379 10.0.0.2 FAIL\n381 10.0.0.4 FAIL\n381 10.0.0.6 FAIL\n383 10.0.0.3 FAIL\n389 10.0.0.6 FAIL\n389 10.0.0.6 FAIL\n392 10.0.0.7 OK\n398 10.0.0.4 FAIL\n400 10.0.0.4 FAIL\n400 10.0.0.1 FAIL\n402 10.0.0.6 FAIL\n403 10.0.0.4 OK\n404 10.0.0.6 FAIL\n404 10.0.0.1 FAIL\n405 10.0.0.2 FAIL\n407 10.0.0.3 FAIL\n410 10.0.0.5 OK\n414 10.0.0.5 FAIL\n414 10.0.0.5 FAIL\n417 10.0.0.7 OK\n417 10.0.0.8 FAIL",
     "output": "NONE",
     "hidden": true
    }
   ]
  },
  {
   "id": "cs2",
   "title": "Firewall CIDR Matcher",
   "difficulty": "Hard",
   "type": "code",
   "desc": "You have N rules 'ALLOW|DENY a.b.c.d/p'. For each of Q IPv4 addresses, find all rules whose CIDR range contains it and apply the one with the LONGEST prefix (largest p); if several have the same prefix length the earliest listed rule wins. If no rule matches the answer is DENY.",
   "input": "Line 1: N Q\nNext N lines: ACTION cidr\nNext Q lines: an IPv4 address",
   "output": "Q lines: ALLOW or DENY",
   "constraints": "1 <= N, Q <= 5000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "2 3\nALLOW 10.0.0.0/8\nDENY 10.1.0.0/16\n10.2.3.4\n10.1.5.5\n8.8.8.8",
     "output": "ALLOW\nDENY\nDENY",
     "hidden": false
    },
    {
     "input": "3 2\nDENY 0.0.0.0/0\nALLOW 192.168.1.0/24\nALLOW 192.168.1.128/25\n192.168.1.200\n1.2.3.4",
     "output": "ALLOW\nDENY",
     "hidden": false
    },
    {
     "input": "6 10\nDENY 10.8.60.219/20\nALLOW 172.24.3.176/16\nALLOW 10.3.73.150/12\nALLOW 10.19.148.40/32\nDENY 192.21.140.18/24\nDENY 172.13.78.108/20\n172.13.162.72\n18.86.67.80\n10.8.60.133\n172.13.78.231\n150.14.182.230\n10.3.0.231\n10.3.73.246\n172.13.191.17\n29.47.39.9\n61.44.225.116",
     "output": "DENY\nDENY\nDENY\nDENY\nDENY\nALLOW\nALLOW\nDENY\nDENY\nDENY",
     "hidden": true
    },
    {
     "input": "10 15\nALLOW 10.13.154.135/16\nALLOW 10.30.174.137/20\nALLOW 10.30.37.218/32\nDENY 192.28.11.28/28\nDENY 192.28.149.176/12\nALLOW 172.4.22.41/8\nALLOW 192.31.69.72/12\nALLOW 172.19.100.132/32\nDENY 10.13.221.182/20\nDENY 192.19.97.193/32\n192.19.146.63\n10.30.174.102\n192.31.244.101\n172.19.63.7\n192.19.49.201\n192.19.97.177\n192.31.69.27\n192.28.149.53\n192.19.97.7\n10.30.37.64\n192.31.179.191\n10.13.154.62\n10.13.154.180\n192.19.97.57\n10.30.37.169",
     "output": "DENY\nALLOW\nDENY\nALLOW\nDENY\nDENY\nDENY\nDENY\nDENY\nDENY\nDENY\nALLOW\nALLOW\nDENY\nDENY",
     "hidden": true
    },
    {
     "input": "15 20\nALLOW 192.3.183.232/28\nDENY 192.17.101.108/28\nDENY 172.15.93.121/32\nDENY 10.11.2.100/32\nALLOW 172.17.25.224/16\nDENY 192.27.203.121/28\nALLOW 172.10.149.14/20\nALLOW 192.25.252.45/12\nALLOW 10.26.233.72/8\nALLOW 172.10.94.60/12\nALLOW 172.26.185.59/32\nALLOW 172.2.170.139/12\nDENY 192.23.8.33/24\nALLOW 172.18.10.82/24\nALLOW 10.27.76.24/20\n62.144.79.136\n172.10.40.112\n10.27.164.172\n48.242.246.44\n192.25.252.64\n192.27.203.107\n192.23.8.117\n172.26.185.114\n192.3.183.239\n172.18.10.24\n56.69.191.113\n157.189.243.232\n172.26.241.197\n192.25.189.215\n172.11.130.197\n192.17.101.65\n10.27.162.2\n10.11.37.252\n222.140.181.71\n192.23.8.211",
     "output": "DENY\nALLOW\nALLOW\nDENY\nALLOW\nALLOW\nDENY\nDENY\nALLOW\nALLOW\nDENY\nDENY\nDENY\nALLOW\nALLOW\nALLOW\nALLOW\nALLOW\nDENY\nDENY",
     "hidden": true
    },
    {
     "input": "20 30\nDENY 172.12.191.39/12\nALLOW 10.15.112.118/8\nDENY 172.3.127.69/16\nALLOW 192.29.102.220/8\nALLOW 172.10.52.225/16\nALLOW 172.10.183.89/24\nALLOW 192.3.106.241/20\nALLOW 172.2.120.54/8\nDENY 10.9.146.175/12\nDENY 172.24.217.186/24\nDENY 10.31.206.31/24\nDENY 10.30.116.113/8\nDENY 172.14.61.18/28\nALLOW 192.29.129.28/24\nALLOW 10.19.126.176/28\nALLOW 192.20.54.102/16\nDENY 10.1.111.151/32\nALLOW 10.8.13.236/8\nDENY 172.24.69.22/32\nALLOW 192.14.220.141/28\n172.2.120.167\n172.12.210.65\n172.12.191.133\n10.30.17.228\n204.56.248.166\n172.10.114.25\n172.3.229.31\n172.14.182.9\n10.1.35.92\n172.24.146.118\n204.147.62.201\n10.1.111.11\n159.33.89.162\n192.20.54.80\n172.3.244.196\n153.209.119.99\n10.15.118.206\n10.19.229.221\n162.105.32.169\n192.29.129.65\n172.14.189.235\n192.14.106.157\n10.15.112.183\n47.193.198.213\n192.29.129.137\n150.16.247.18\n192.20.54.148\n214.114.188.12\n172.24.69.249\n172.10.237.212",
     "output": "DENY\nDENY\nDENY\nALLOW\nDENY\nALLOW\nDENY\nDENY\nDENY\nALLOW\nDENY\nDENY\nDENY\nALLOW\nDENY\nDENY\nDENY\nALLOW\nDENY\nALLOW\nDENY\nALLOW\nDENY\nDENY\nALLOW\nDENY\nALLOW\nDENY\nALLOW\nALLOW",
     "hidden": true
    },
    {
     "input": "8 12\nDENY 192.10.227.154/20\nDENY 10.19.176.182/28\nALLOW 192.26.141.181/8\nDENY 192.22.74.175/16\nALLOW 192.21.155.87/28\nALLOW 172.9.95.216/8\nDENY 10.1.172.62/20\nALLOW 172.11.92.86/24\n203.183.108.200\n192.22.74.15\n38.248.227.112\n172.11.92.97\n10.19.202.174\n10.1.172.110\n174.6.83.69\n172.11.92.133\n24.234.96.50\n145.192.15.251\n10.19.176.228\n172.9.176.4",
     "output": "DENY\nDENY\nDENY\nALLOW\nDENY\nDENY\nDENY\nALLOW\nDENY\nDENY\nDENY\nALLOW",
     "hidden": true
    }
   ]
  }
 ],
 "pds": [
  {
   "id": "pds1",
   "title": "Top-K Frequent Words",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Given N words and K, print the K most frequent words with their counts, ordered by count descending and, for equal counts, by word ascending (alphabetical). Print one 'word count' pair per line. If there are fewer than K distinct words print all of them.",
   "input": "Line 1: N K\nLine 2: N space-separated words",
   "output": "Up to K lines: word count",
   "constraints": "1 <= K <= N <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "8 2\nkappa alpha kappa beta alpha kappa beta gamma",
     "output": "kappa 3\nalpha 2",
     "hidden": false
    },
    {
     "input": "5 3\nzeta mu iota zeta mu",
     "output": "mu 2\nzeta 2\niota 1",
     "hidden": false
    },
    {
     "input": "30 3\nalpha sigma alpha beta gamma beta kappa kappa beta delta alpha sigma kappa kappa alpha sigma delta gamma beta sigma delta beta gamma delta sigma beta kappa beta gamma beta",
     "output": "beta 8\nkappa 5\nsigma 5",
     "hidden": true
    },
    {
     "input": "60 4\ngamma sigma alpha beta zeta omega sigma zeta gamma delta beta sigma zeta gamma sigma sigma gamma kappa beta sigma sigma sigma zeta kappa gamma delta beta beta zeta kappa gamma kappa gamma sigma sigma sigma delta zeta kappa alpha zeta beta alpha alpha omega gamma alpha sigma sigma delta kappa sigma delta kappa omega delta kappa delta zeta gamma",
     "output": "sigma 14\ngamma 9\nkappa 8\nzeta 8",
     "hidden": true
    },
    {
     "input": "1 5\nsigma",
     "output": "sigma 1",
     "hidden": true
    },
    {
     "input": "200 5\nomega sigma alpha lambda delta sigma mu beta alpha lambda theta mu omega mu kappa lambda mu sigma omega delta delta theta omega kappa iota alpha alpha lambda omega delta iota beta sigma sigma beta alpha zeta kappa zeta omega iota gamma iota zeta alpha sigma sigma lambda sigma mu mu sigma theta mu omega kappa omega alpha mu sigma delta delta lambda beta zeta kappa beta beta theta lambda beta mu beta delta gamma zeta gamma theta iota kappa iota iota delta theta mu beta zeta lambda beta beta lambda theta zeta beta lambda kappa theta gamma zeta theta omega omega delta theta sigma beta delta delta sigma sigma delta zeta omega zeta lambda kappa alpha zeta theta gamma gamma gamma beta mu mu delta mu iota delta delta iota mu gamma gamma lambda gamma iota alpha gamma theta alpha omega beta zeta delta mu lambda iota lambda gamma gamma omega delta theta zeta iota zeta gamma gamma sigma beta iota delta delta gamma gamma kappa delta theta gamma delta beta sigma iota beta zeta gamma kappa alpha mu kappa iota delta delta delta zeta iota alpha omega omega omega alpha kappa alpha sigma omega iota omega zeta theta",
     "output": "delta 24\ngamma 19\nbeta 18\nomega 18\niota 17",
     "hidden": true
    },
    {
     "input": "300 3\ngamma beta alpha delta beta alpha alpha delta alpha gamma alpha alpha delta gamma delta gamma alpha alpha gamma alpha delta beta delta beta delta gamma gamma alpha delta alpha alpha gamma gamma alpha gamma gamma beta beta delta gamma gamma gamma gamma gamma gamma gamma delta beta delta beta gamma delta beta gamma beta delta gamma gamma alpha alpha delta delta alpha gamma beta alpha gamma delta beta delta alpha beta gamma gamma beta gamma beta alpha beta delta gamma alpha beta delta gamma alpha beta delta gamma alpha gamma beta alpha gamma gamma delta delta delta delta gamma alpha beta alpha gamma gamma alpha alpha beta beta gamma delta gamma beta beta delta delta delta delta beta alpha beta alpha alpha alpha alpha beta alpha delta alpha delta alpha alpha beta gamma gamma delta alpha beta gamma beta delta beta delta gamma beta alpha gamma delta delta alpha beta alpha gamma delta beta beta alpha alpha gamma beta beta gamma delta beta beta gamma beta gamma delta beta gamma beta delta delta alpha delta beta delta gamma beta gamma gamma delta alpha alpha gamma delta alpha alpha alpha delta beta alpha beta delta beta delta alpha gamma alpha gamma alpha alpha gamma delta beta beta gamma delta alpha gamma gamma alpha beta alpha beta delta beta delta alpha delta delta alpha alpha alpha beta gamma gamma alpha beta gamma gamma alpha beta gamma delta delta beta delta delta beta alpha beta alpha beta alpha gamma gamma delta gamma alpha alpha alpha gamma gamma beta alpha beta gamma delta delta delta alpha alpha alpha delta delta alpha alpha alpha delta alpha beta beta delta gamma delta delta alpha delta alpha gamma alpha alpha beta beta gamma beta alpha delta gamma gamma delta alpha alpha alpha gamma delta delta beta",
     "output": "alpha 84\ngamma 76\ndelta 73",
     "hidden": true
    }
   ]
  },
  {
   "id": "pds2",
   "title": "Count Subarrays With Sum K",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Given an integer array (it may contain negatives and zeros) and an integer K, count the contiguous non-empty subarrays whose sum equals exactly K.",
   "input": "Line 1: N K\nLine 2: N integers",
   "output": "A single integer",
   "constraints": "1 <= N <= 200000, |a[i]| <= 10^4",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "5 7\n3 4 7 2 -3",
     "output": "2",
     "hidden": false
    },
    {
     "input": "6 0\n0 0 0 0 0 0",
     "output": "21",
     "hidden": false
    },
    {
     "input": "20 5\n3 -1 -2 -3 6 6 6 0 -2 -2 6 1 -4 2 6 -1 5 3 -1 -2",
     "output": "7",
     "hidden": true
    },
    {
     "input": "50 0\n2 0 -4 -1 -5 -2 5 4 1 -4 -3 -2 -3 4 1 0 -2 -2 4 3 -1 0 5 0 -2 -5 3 0 -2 4 0 2 5 -3 3 -5 1 -3 -5 -2 -2 -3 5 3 3 1 3 -4 0 -5",
     "output": "76",
     "hidden": true
    },
    {
     "input": "1 5\n5",
     "output": "1",
     "hidden": true
    },
    {
     "input": "200 3\n-3 2 -3 5 -1 -3 2 2 -2 4 1 4 4 0 3 4 2 3 1 1 -2 4 -3 -1 5 1 -3 -1 5 2 0 -1 1 1 0 -3 -3 0 -1 3 1 -1 -2 -2 5 1 2 5 4 3 -2 -3 2 1 3 2 -3 4 3 3 4 4 5 -2 2 5 1 2 1 2 2 0 3 0 1 4 4 -1 -3 3 1 -1 5 -3 0 -2 1 -3 -3 4 -2 -2 2 -1 1 -2 1 3 5 -3 1 -1 2 -1 -2 2 3 -1 -3 4 1 2 0 2 5 3 -1 3 2 2 -1 1 -3 -2 -2 0 -3 3 -2 3 -1 3 -1 -2 -1 1 2 2 -1 4 2 2 4 0 -1 -2 3 0 2 1 1 0 0 1 -3 2 2 -3 5 4 -1 3 3 -3 -1 0 -2 5 4 -1 -2 3 -1 5 1 0 -1 2 -1 4 0 2 -1 -3 3 -2 -1 5 3 4 4 5 -1 -2 3 5 3 -2 0 2",
     "output": "203",
     "hidden": true
    },
    {
     "input": "500 10\n4 2 0 6 4 5 -5 -4 2 -5 0 2 -3 -5 -3 -2 3 -3 -5 2 -4 2 7 -1 4 -5 6 -5 -3 6 6 4 7 -5 5 -5 1 -5 -3 1 0 -3 7 5 4 5 6 -3 6 -2 -4 1 1 3 -1 3 5 5 6 5 5 -2 6 7 -4 -3 -2 7 6 -3 6 4 -1 1 3 0 -5 2 0 1 4 7 -1 -3 -3 0 1 3 -3 -4 -5 2 -3 -5 3 -1 4 0 -4 0 0 6 -2 -3 5 1 -4 -1 3 3 6 -1 7 -5 0 0 -1 4 6 -4 5 4 0 -2 1 0 7 2 2 -3 4 -3 -1 7 -4 1 4 0 -3 -1 5 4 3 1 2 1 7 -1 -4 -2 -1 6 6 4 2 5 -2 1 2 -3 0 2 3 6 1 -2 4 -5 7 0 6 2 6 3 3 -1 -4 7 -4 3 2 4 -5 -3 -1 2 -3 6 6 -2 7 -3 1 -3 2 3 5 -1 4 -1 3 2 0 -4 2 -4 -3 5 6 -5 -1 5 1 -2 7 -5 1 3 -1 5 -1 0 6 -5 -2 3 -3 -1 3 0 7 4 4 5 0 -1 0 5 6 2 2 6 -3 6 -5 -3 4 -3 6 5 2 -3 0 2 2 0 4 -4 4 -1 -2 3 -1 -5 -3 -1 4 -5 -2 5 -4 4 4 7 -2 6 1 -1 2 4 7 5 -5 -2 -2 0 -4 -3 -2 1 1 1 3 6 -2 -2 0 2 -4 4 -2 2 4 0 1 7 4 3 7 2 -4 7 5 -2 -1 4 -2 -3 2 -3 4 -5 6 6 5 -1 -2 -5 -2 -3 -3 -4 -1 -4 2 7 7 6 -2 7 -5 -4 0 -1 1 5 0 -5 0 0 0 -5 -5 -3 5 -1 4 2 3 7 -3 6 1 5 3 1 -3 0 1 4 5 0 -3 5 2 4 3 -5 -2 -5 4 -5 -5 -4 -1 -5 0 -4 5 -1 -1 0 5 4 4 -4 -4 1 5 4 -2 7 4 -5 7 4 -1 3 6 1 -5 0 -5 4 -2 7 1 -1 5 -4 -4 5 -4 1 4 -1 -1 4 2 2 7 6 6 0 -2 -5 5 0 -1 3 -2 -4 -5 -3 5 -2 7 7 6 -4 -1 6 -5 -2 5 -3 -1 0 6 5 6 0 2 -3 -5 4 5 2 1 0 1 -1 2 1 5 -5 7 -4 -1 -4 -5 -2 6 -2 5 -2 0 5 -3 -4 -1 -1 2 -4 5 -3 -4 2 5 2",
     "output": "454",
     "hidden": true
    }
   ]
  }
 ],
 "pml": [
  {
   "id": "pml1",
   "title": "K-Means (Integer Centroids)",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Run K-Means for I iterations on N 2-D non-negative integer points. Each iteration: assign every point to the nearest centroid by squared Euclidean distance (ties go to the lowest centroid index), then set each centroid to (floor(sum_x / count), floor(sum_y / count)). A centroid with no points keeps its old position. Print the final centroids.",
   "input": "Line 1: N K I\nNext N lines: x y\nNext K lines: initial centroid x y",
   "output": "K lines: x y",
   "constraints": "1 <= K <= N <= 5000, 1 <= I <= 100, coordinates 0..10^6",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "4 2 1\n1 1\n2 2\n8 8\n9 9\n0 0\n10 10",
     "output": "1 1\n8 8",
     "hidden": false
    },
    {
     "input": "3 2 2\n0 0\n1 1\n50 50\n0 0\n1 1",
     "output": "0 0\n50 50",
     "hidden": false
    },
    {
     "input": "20 3 3\n9 1\n27 60\n15 0\n27 1\n11 46\n25 57\n18 23\n15 18\n1 24\n53 26\n0 31\n25 35\n42 14\n12 6\n44 9\n31 46\n17 3\n50 27\n18 50\n13 34\n33 24\n26 56\n54 41",
     "output": "12 11\n21 46\n47 19",
     "hidden": true
    },
    {
     "input": "40 4 5\n24 35\n46 35\n52 53\n38 19\n19 29\n10 41\n11 1\n59 4\n13 43\n27 38\n35 44\n41 0\n52 28\n15 11\n20 19\n29 1\n5 10\n17 11\n40 56\n40 29\n43 33\n41 3\n25 23\n48 22\n46 60\n29 43\n32 18\n31 18\n43 18\n22 38\n8 36\n18 22\n52 52\n25 28\n53 46\n4 32\n41 57\n2 12\n21 32\n48 18\n55 50\n24 49\n39 10\n51 57",
     "output": "45 20\n18 33\n20 10\n45 52",
     "hidden": true
    },
    {
     "input": "15 5 2\n42 2\n25 17\n45 30\n54 54\n8 15\n16 60\n32 4\n44 6\n24 4\n40 40\n40 12\n18 19\n26 46\n7 4\n36 33\n11 10\n41 10\n28 42\n27 47\n26 10",
     "output": "11 12\n42 6\n40 34\n32 53\n27 8",
     "hidden": true
    },
    {
     "input": "80 4 8\n32 6\n42 35\n23 19\n58 20\n34 2\n29 52\n6 24\n37 37\n54 53\n55 8\n36 22\n15 46\n41 26\n15 12\n28 53\n41 26\n32 48\n34 33\n5 1\n50 56\n17 54\n17 14\n32 26\n42 40\n38 30\n34 18\n15 59\n33 53\n25 38\n38 43\n45 12\n26 30\n20 42\n55 60\n43 12\n27 43\n53 28\n5 9\n35 15\n17 3\n45 39\n4 10\n22 60\n36 56\n30 49\n20 35\n2 35\n53 42\n35 3\n4 44\n56 34\n31 41\n0 12\n52 32\n55 59\n25 32\n58 33\n35 11\n5 59\n16 47\n37 32\n2 54\n18 44\n35 6\n1 30\n17 45\n40 1\n58 36\n27 57\n46 30\n45 1\n50 39\n47 25\n1 23\n51 18\n35 46\n8 46\n0 43\n7 35\n10 0\n9 2\n10 38\n0 5\n30 11",
     "output": "22 6\n30 48\n4 39\n45 27",
     "hidden": true
    },
    {
     "input": "100 6 10\n1 22\n24 59\n31 52\n32 14\n43 46\n10 16\n0 22\n58 40\n50 47\n59 31\n54 48\n21 9\n53 48\n28 31\n27 2\n43 23\n31 24\n26 37\n55 16\n48 25\n42 43\n43 29\n21 14\n15 7\n20 30\n51 0\n41 13\n12 20\n56 37\n54 43\n11 42\n54 49\n43 31\n31 2\n54 10\n34 44\n7 17\n1 39\n34 49\n38 24\n32 47\n2 58\n43 12\n37 34\n30 11\n50 1\n16 4\n52 2\n58 57\n49 7\n54 37\n14 15\n25 55\n23 22\n48 42\n13 55\n53 58\n56 7\n35 55\n22 36\n38 5\n50 24\n23 40\n33 45\n26 58\n7 6\n50 33\n53 5\n23 45\n51 55\n4 24\n53 36\n2 37\n39 59\n42 19\n29 56\n0 24\n51 9\n0 50\n22 31\n39 40\n24 50\n15 14\n23 37\n46 7\n50 49\n23 41\n9 54\n25 53\n39 1\n52 45\n24 22\n60 27\n16 13\n31 4\n17 60\n14 31\n38 52\n60 3\n1 0\n39 23\n18 6\n30 11\n28 0\n11 44\n31 53",
     "output": "50 32\n8 14\n29 15\n49 6\n17 45\n43 49",
     "hidden": true
    }
   ]
  },
  {
   "id": "pml2",
   "title": "Train a Perceptron",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Train a perceptron with integer weights. Start with all weights 0 and bias 0. For E epochs, go through the samples IN GIVEN ORDER; for sample (x, y) with y in {+1, -1}, if y * (w.x + b) <= 0 then update w = w + y*x and b = b + y. Print the final weights followed by the bias.",
   "input": "Line 1: N D E\nNext N lines: D integers (features) then the label",
   "output": "D+1 integers: w1 ... wD b",
   "constraints": "1 <= N <= 1000, 1 <= D <= 5, 1 <= E <= 50",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "4 2 3\n1 1 1\n2 2 1\n-1 -1 -1\n-2 -1 -1",
     "output": "1 1 1",
     "hidden": false
    },
    {
     "input": "2 1 2\n3 1\n-2 -1",
     "output": "3 1",
     "hidden": false
    },
    {
     "input": "10 2 3\n5 -2 -1\n4 -8 -1\n8 6 -1\n-2 2 1\n-8 8 1\n-6 -6 1\n-6 8 -1\n6 4 -1\n2 2 1\n-6 0 -1",
     "output": "1 -2 -5",
     "hidden": true
    },
    {
     "input": "30 3 5\n1 5 1 -1\n4 -8 -7 1\n3 8 -2 -1\n3 -1 -5 1\n-1 -2 8 -1\n1 -6 1 1\n0 -6 2 1\n8 8 -4 -1\n6 4 -8 1\n-5 -4 -2 1\n6 0 3 1\n8 5 2 -1\n-1 4 -5 -1\n3 6 -1 -1\n3 -2 4 1\n4 8 0 -1\n2 7 -5 -1\n7 0 1 1\n7 -6 -4 1\n3 2 7 -1\n-7 3 -6 -1\n-1 -3 5 -1\n-5 -5 -6 1\n-3 -6 -2 1\n8 -7 2 1\n1 -7 -7 1\n1 4 6 -1\n7 3 1 1\n-4 6 -2 -1\n3 -4 6 1",
     "output": "8 -14 -7 0",
     "hidden": true
    },
    {
     "input": "20 2 1\n4 -1 -1\n0 2 1\n-5 -5 1\n-7 -4 1\n-2 0 1\n5 -3 -1\n4 5 -1\n-2 -4 -1\n7 7 -1\n3 0 -1\n2 -5 -1\n5 -7 -1\n8 -5 -1\n-6 4 1\n2 -8 -1\n-4 1 1\n1 -1 -1\n-3 4 1\n8 -6 -1\n4 -5 -1",
     "output": "-9 -2 -3",
     "hidden": true
    },
    {
     "input": "60 4 10\n-6 -5 0 -7 1\n-1 -8 5 -5 1\n-1 7 7 6 1\n5 5 -7 -4 -1\n5 -4 -2 6 -1\n-5 -3 -2 -6 1\n7 0 -3 4 -1\n0 -7 7 6 1\n-2 -2 6 -4 1\n7 5 0 -8 -1\n3 4 1 -5 -1\n-2 0 -4 5 -1\n6 1 6 0 1\n-5 5 3 -3 1\n-7 -5 1 5 1\n7 6 4 4 -1\n-5 6 5 4 1\n0 3 4 -6 1\n7 5 -6 -5 -1\n-1 -3 6 7 1\n-7 0 -7 3 -1\n-5 -2 4 -8 1\n-6 0 6 -1 1\n-2 4 4 3 1\n7 -4 -8 2 -1\n7 5 -7 2 -1\n5 6 -4 6 -1\n-4 7 7 4 1\n6 7 -7 5 -1\n7 6 7 6 -1\n-7 -1 -4 8 -1\n4 6 -3 -8 -1\n-6 3 8 2 1\n3 -4 -4 0 -1\n3 6 5 6 -1\n0 -1 8 -1 1\n-5 -1 -6 1 -1\n2 -7 -3 5 -1\n0 -7 8 -3 1\n-5 -1 -6 -6 -1\n6 5 6 -1 -1\n-2 4 4 -4 1\n-4 -4 7 0 1\n-4 -7 7 -1 1\n-3 3 4 0 1\n-6 -7 5 1 1\n4 -7 -6 -3 -1\n-2 -3 -1 -5 1\n6 -2 5 7 -1\n-2 3 5 8 1\n3 -2 -2 -1 -1\n-4 -7 1 -3 1\n-5 7 -8 -4 -1\n1 2 -3 8 -1\n5 -1 -1 -2 -1\n-8 5 2 4 1\n8 5 -5 -2 -1\n-7 -3 5 5 1\n0 0 4 -1 1\n0 -2 -4 -1 -1",
     "output": "-11 -10 15 -5 -6",
     "hidden": true
    },
    {
     "input": "100 5 20\n-5 -4 3 3 4 1\n4 -7 -1 7 1 -1\n0 3 -8 -6 6 -1\n1 4 2 0 2 1\n-7 -2 -7 6 0 -1\n4 8 -7 0 3 -1\n3 -2 8 7 6 1\n0 2 7 -1 4 1\n1 0 2 -1 -3 1\n7 2 6 -1 -5 1\n-5 5 -4 -6 8 -1\n-1 -6 2 8 3 1\n-3 -5 7 1 -1 1\n-2 6 0 3 -6 -1\n2 -5 -8 -4 -4 -1\n-6 2 -8 5 3 -1\n-8 -3 -5 6 -7 -1\n-6 0 0 -4 -1 1\n5 -1 -1 -7 4 1\n8 1 5 5 2 1\n1 6 1 -3 0 1\n3 6 8 3 -1 1\n-5 4 1 -7 0 1\n-4 5 -7 5 -6 -1\n-8 4 6 8 -8 1\n-2 -1 -3 0 7 1\n-8 4 5 2 -4 1\n5 -7 -6 -6 -6 -1\n0 -5 -1 -7 1 1\n8 7 -7 -7 3 -1\n6 2 -5 0 6 -1\n-7 -7 -5 3 -3 -1\n-1 7 -7 7 -1 -1\n5 4 -6 4 2 -1\n4 4 0 -2 6 1\n3 3 1 6 7 -1\n-3 -3 7 -7 5 1\n-3 2 5 3 -2 1\n8 3 -3 3 6 -1\n5 7 8 -5 -5 1\n-7 -4 6 -6 -7 1\n-8 -2 1 8 -5 -1\n8 -8 3 6 -5 1\n2 -1 2 5 7 1\n0 -3 7 -3 -4 1\n-1 1 1 -8 6 1\n4 -2 1 -5 -1 1\n-4 6 6 -2 -6 1\n0 7 -3 0 -6 -1\n6 7 0 1 7 1\n-3 -3 5 4 1 1\n-6 7 4 -7 8 1\n2 0 1 -5 5 1\n-5 -4 -1 6 -3 -1\n-7 1 4 8 8 1\n-1 5 5 -7 -3 1\n1 0 0 -8 1 1\n-2 -6 -1 2 -4 -1\n4 1 2 -8 1 1\n-3 4 4 -6 8 1\n8 8 3 -5 -1 1\n-5 -6 -8 5 -3 -1\n3 -4 -3 -5 -5 -1\n-2 6 6 2 3 1\n8 -4 3 -6 1 1\n-1 -3 6 -1 -4 1\n5 3 2 -7 -1 1\n8 -5 3 5 -3 1\n-5 3 6 6 -1 1\n6 -3 -7 7 5 -1\n0 4 6 1 -1 1\n-1 -7 0 1 -4 1\n-2 -4 -7 3 -3 -1\n7 2 -2 1 -1 -1\n-5 -2 0 6 7 1\n-2 -7 -7 -4 1 -1\n8 4 2 -7 6 1\n-3 7 -7 -6 7 -1\n-2 7 5 -4 2 1\n-7 -8 7 6 -3 1\n-6 -6 8 3 -2 1\n2 1 -3 -5 -1 -1\n6 8 0 -2 2 -1\n0 0 1 2 -3 -1\n6 -8 6 -7 0 1\n8 -2 -2 -5 6 1\n-1 2 -1 0 -8 -1\n3 -5 -3 -3 0 -1\n8 0 2 7 -5 -1\n6 -4 5 1 -8 1\n8 4 2 1 6 1\n-8 7 5 5 4 1\n-7 5 -4 5 -7 -1\n5 4 -2 -7 -5 -1\n1 -2 3 1 1 1\n5 7 -3 5 -6 -1\n-7 -1 5 5 -6 1\n-1 -2 -5 -8 4 -1\n-1 -6 -1 -3 -2 1\n7 -8 0 -2 7 1",
     "output": "-2 -14 47 -13 19 21",
     "hidden": true
    }
   ]
  }
 ],
 "iot": [
  {
   "id": "iot1",
   "title": "Sensor Spike Detector",
   "difficulty": "Hard",
   "type": "code",
   "desc": "A sensor sends N integer readings. Reading i (0-based, i >= K) is a SPIKE if it exceeds the average of the previous K readings by MORE than T, i.e. r[i] - avg(r[i-K..i-1]) > T. Use integer arithmetic: r[i]*K - sum(previous K) > T*K. Print the number of spikes, then their indices in order (or '-' if none).",
   "input": "Line 1: N K T\nLine 2: N integers",
   "output": "Line 1: count\nLine 2: indices separated by spaces, or -",
   "constraints": "1 <= K < N <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "8 3 10\n20 21 22 50 23 24 60 22",
     "output": "2\n3 6",
     "hidden": false
    },
    {
     "input": "4 2 5\n10 10 11 12",
     "output": "0\n-",
     "hidden": false
    },
    {
     "input": "20 3 12\n35 33 38 77 22 20 29 31 33 34 89 22 22 21 32 34 38 34 37 23",
     "output": "2\n3 10",
     "hidden": true
    },
    {
     "input": "40 5 15\n20 40 27 30 26 24 55 20 36 22 29 20 27 23 37 21 23 25 68 37 72 34 80 85 29 35 39 37 38 24 22 40 26 90 35 29 25 38 31 24",
     "output": "6\n6 18 20 22 23 33",
     "hidden": true
    },
    {
     "input": "30 4 40\n22 23 23 23 34 37 39 20 28 32 23 65 22 29 39 22 39 39 76 35 32 35 24 68 35 66 35 34 37 58",
     "output": "1\n18",
     "hidden": true
    },
    {
     "input": "100 6 10\n39 85 39 23 40 29 23 90 32 35 40 35 35 24 29 28 24 71 25 40 39 73 34 28 32 30 38 35 26 37 25 24 39 75 22 27 26 40 33 26 39 23 26 30 23 36 36 25 27 28 23 25 77 35 34 26 38 26 20 39 26 23 27 29 40 37 20 25 35 31 22 27 37 30 31 38 20 22 36 36 30 40 37 39 24 35 21 90 25 33 27 64 37 21 67 24 40 35 30 36",
     "output": "10\n7 17 21 33 52 64 72 87 91 94",
     "hidden": true
    },
    {
     "input": "200 10 20\n25 27 37 34 74 27 28 34 21 21 30 30 31 33 37 28 67 35 35 33 31 23 25 77 26 38 26 89 27 26 26 27 81 25 33 23 20 31 67 25 32 33 60 32 26 79 20 21 30 24 26 30 29 25 38 78 29 27 39 79 27 35 33 61 23 23 31 24 22 40 30 21 32 30 34 29 23 34 25 33 58 38 21 20 21 25 20 30 36 26 26 33 33 28 38 22 27 55 29 24 22 28 33 56 23 23 78 33 26 40 20 71 27 30 39 35 38 28 21 32 37 38 85 33 30 32 21 34 34 28 31 31 22 67 39 23 77 22 27 31 26 28 34 29 75 25 36 23 22 27 25 24 34 27 25 24 34 20 28 25 20 36 20 26 22 35 32 27 30 20 85 40 36 72 34 20 29 32 20 34 30 29 20 26 78 34 32 40 87 38 36 23 26 26 29 27 34 78 32 30",
     "output": "23\n16 23 27 32 38 42 45 55 59 80 97 103 106 111 122 133 136 144 170 173 184 188 197",
     "hidden": true
    }
   ]
  },
  {
   "id": "iot2",
   "title": "Button Debounce Counter",
   "difficulty": "Hard",
   "type": "code",
   "desc": "A push-button produces noisy transitions. You get N events 't v' meaning the raw signal became v (0 or 1) at time t (times strictly increasing). The signal starts at 0; events that repeat the current value are ignored. A transition is STABLE if the next accepted transition happens at least D ms later (the last transition is always stable). Keep the last stable value (initially 0). Count how many times a stable transition to 1 happens while the last stable value is 0 (a valid press).",
   "input": "Line 1: N D\nNext N lines: t v",
   "output": "A single integer (valid presses)",
   "constraints": "1 <= N <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "6 5\n1 1\n2 0\n3 1\n20 0\n40 1\n41 1",
     "output": "2",
     "hidden": false
    },
    {
     "input": "4 10\n0 1\n3 0\n5 1\n30 0",
     "output": "1",
     "hidden": false
    },
    {
     "input": "15 5\n2 1\n6 0\n10 1\n11 1\n16 0\n18 0\n20 1\n35 0\n36 0\n41 1\n45 0\n60 1\n65 0\n66 1\n67 1",
     "output": "2",
     "hidden": true
    },
    {
     "input": "30 8\n3 0\n27 1\n38 0\n45 1\n53 0\n77 1\n78 0\n80 1\n104 0\n112 1\n123 0\n131 1\n139 0\n163 1\n164 0\n166 1\n177 0\n179 1\n186 0\n189 1\n200 0\n201 1\n204 0\n215 1\n239 0\n241 1\n249 0\n250 1\n274 0\n285 1",
     "output": "7",
     "hidden": true
    },
    {
     "input": "20 3\n3 1\n9 0\n10 1\n11 1\n12 1\n14 0\n23 1\n24 0\n26 1\n27 1\n29 0\n32 0\n35 1\n37 0\n46 1\n52 1\n61 0\n63 1\n65 0\n68 1",
     "output": "4",
     "hidden": true
    },
    {
     "input": "80 6\n18 1\n19 0\n28 1\n37 0\n43 1\n61 1\n63 1\n68 0\n73 0\n75 0\n81 1\n87 0\n88 1\n94 0\n97 1\n103 0\n105 0\n107 1\n116 0\n122 1\n140 0\n146 1\n164 0\n167 1\n173 0\n174 1\n183 0\n184 1\n187 0\n190 1\n208 1\n214 1\n232 0\n237 1\n243 1\n244 1\n250 0\n268 1\n270 1\n272 0\n278 1\n284 1\n290 0\n295 1\n304 0\n305 1\n310 0\n328 1\n333 1\n336 0\n339 1\n357 0\n359 0\n362 1\n365 0\n374 0\n383 1\n389 0\n390 1\n391 0\n392 1\n397 0\n406 1\n411 0\n416 0\n419 0\n422 1\n440 0\n446 1\n452 1\n453 0\n471 1\n480 0\n489 1\n492 0\n494 1\n499 1\n504 0\n510 1\n511 0",
     "output": "12",
     "hidden": true
    },
    {
     "input": "150 10\n2 1\n3 0\n16 1\n17 0\n26 1\n35 0\n37 1\n38 0\n68 1\n78 0\n108 0\n117 1\n127 0\n157 1\n170 0\n180 0\n193 1\n195 1\n204 0\n214 1\n216 0\n218 1\n248 0\n261 1\n263 0\n264 1\n294 1\n296 0\n297 1\n299 0\n308 1\n338 0\n368 1\n378 0\n381 1\n411 0\n412 1\n442 0\n445 1\n454 0\n464 1\n466 0\n469 1\n471 1\n472 0\n502 1\n515 0\n518 1\n528 0\n531 1\n534 0\n547 1\n556 0\n566 0\n567 1\n576 0\n578 1\n588 0\n597 1\n599 0\n602 1\n612 0\n615 1\n625 0\n628 1\n629 1\n638 0\n641 1\n671 0\n673 1\n703 0\n713 1\n714 1\n716 0\n729 1\n730 0\n739 0\n749 1\n759 0\n768 1\n771 0\n781 1\n783 0\n793 1\n795 0\n804 0\n805 1\n818 0\n821 1\n823 0\n825 1\n828 0\n858 1\n859 0\n861 0\n862 1\n872 0\n881 1\n911 0\n914 1\n924 0\n933 1\n943 1\n944 0\n953 1\n954 0\n957 0\n970 1\n979 0\n981 1\n984 1\n997 0\n1007 1\n1010 0\n1013 1\n1022 0\n1052 0\n1053 1\n1056 0\n1069 1\n1082 0\n1084 1\n1086 0\n1087 0\n1100 1\n1113 0\n1123 1\n1153 0\n1162 1\n1175 0\n1184 1\n1185 0\n1186 0\n1188 1\n1191 1\n1193 0\n1195 1\n1196 1\n1205 1\n1206 0\n1208 1\n1218 0\n1248 1\n1278 1\n1288 0\n1289 1\n1291 0\n1300 0\n1313 1\n1316 0",
     "output": "17",
     "hidden": true
    }
   ]
  }
 ],
 "es": [
  {
   "id": "es1",
   "title": "32-bit Register Bit-Field Simulator",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Simulate a 32-bit register, initially 0 (bit 0 is the least significant bit). Commands: SET p n v (write the n-bit value v into bits p..p+n-1), GET p n (print the n-bit value at position p), TOGGLE p n (flip n bits starting at p), POPCNT (print the number of 1 bits), REV (reverse the order of all 32 bits). After all commands print the final register as 0x followed by 8 uppercase hex digits.",
   "input": "Line 1: Q\nNext Q lines: a command",
   "output": "One line for each GET and POPCNT command (decimal), then the final register in hex",
   "constraints": "1 <= Q <= 100000, 0 <= p, p+n <= 32",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "5\nSET 0 8 255\nGET 4 4\nTOGGLE 0 4\nPOPCNT\nREV",
     "output": "15\n4\n0x0F000000",
     "hidden": false
    },
    {
     "input": "3\nSET 28 4 9\nREV\nGET 0 4",
     "output": "9\n0x00000009",
     "hidden": false
    },
    {
     "input": "12\nSET 25 2 3\nSET 17 12 1432\nSET 19 2 1\nSET 20 5 13\nGET 10 10\nSET 6 5 18\nGET 15 12\nREV\nGET 15 11\nREV\nSET 21 9 124\nGET 23 9",
     "output": "512\n1456\n576\n31\n0x0F980480",
     "hidden": true
    },
    {
     "input": "25\nGET 29 1\nSET 25 4 10\nGET 25 5\nPOPCNT\nGET 18 5\nTOGGLE 0 5\nSET 19 9 20\nPOPCNT\nGET 5 12\nSET 15 10 451\nTOGGLE 17 4\nSET 2 1 0\nGET 24 4\nGET 5 3\nPOPCNT\nTOGGLE 19 3\nREV\nGET 12 6\nTOGGLE 0 4\nPOPCNT\nSET 21 9 194\nSET 12 2 0\nREV\nREV\nSET 0 7 44",
     "output": "0\n10\n2\n0\n8\n0\n0\n0\n14\n30\n13\n0xD841C32C",
     "hidden": true
    },
    {
     "input": "40\nGET 0 3\nPOPCNT\nSET 13 12 1736\nREV\nGET 30 2\nSET 4 11 1804\nGET 8 1\nSET 1 1 0\nSET 24 8 176\nSET 19 7 125\nSET 3 11 1555\nGET 27 5\nGET 10 8\nSET 0 8 234\nGET 2 2\nTOGGLE 22 8\nSET 3 12 3505\nREV\nGET 12 9\nPOPCNT\nREV\nSET 3 5 9\nTOGGLE 26 3\nGET 7 4\nSET 1 2 1\nGET 3 7\nPOPCNT\nGET 11 4\nGET 1 8\nSET 26 3 5\nPOPCNT\nREV\nGET 3 6\nSET 11 12 3259\nSET 0 5 3\nSET 30 2 1\nSET 5 8 123\nTOGGLE 10 4\nGET 1 11\nGET 4 4",
     "output": "0\n0\n0\n0\n22\n60\n2\n369\n14\n10\n41\n13\n13\n165\n14\n5\n433\n6\n0x52E5F363",
     "hidden": true
    },
    {
     "input": "80\nREV\nGET 20 2\nPOPCNT\nSET 7 8 78\nGET 23 4\nSET 27 1 1\nREV\nTOGGLE 10 6\nGET 6 11\nSET 21 8 111\nGET 18 6\nTOGGLE 15 9\nTOGGLE 13 5\nREV\nSET 12 9 244\nREV\nPOPCNT\nPOPCNT\nTOGGLE 14 5\nGET 17 2\nSET 23 3 2\nSET 0 10 527\nPOPCNT\nREV\nGET 18 4\nGET 14 12\nGET 12 11\nREV\nPOPCNT\nGET 16 10\nTOGGLE 1 7\nGET 12 9\nREV\nREV\nSET 22 10 115\nGET 12 10\nREV\nGET 21 9\nSET 10 12 1646\nGET 1 2\nPOPCNT\nREV\nGET 2 6\nGET 2 2\nGET 29 1\nSET 3 11 1282\nGET 1 9\nGET 25 6\nTOGGLE 24 8\nREV\nPOPCNT\nREV\nPOPCNT\nSET 7 9 250\nREV\nREV\nGET 20 2\nPOPCNT\nSET 6 9 366\nGET 12 10\nGET 20 4\nSET 20 4 8\nTOGGLE 27 4\nGET 15 3\nREV\nGET 9 11\nGET 15 12\nGET 23 6\nGET 22 9\nGET 19 6\nTOGGLE 19 5\nSET 10 11 556\nPOPCNT\nPOPCNT\nSET 26 5 22\nREV\nSET 14 8 175\nSET 17 9 148\nGET 25 6\nGET 17 5",
     "output": "0\n0\n0\n1008\n57\n11\n11\n2\n14\n11\n434\n1738\n14\n277\n339\n339\n123\n0\n18\n60\n0\n0\n8\n14\n16\n16\n1\n19\n469\n13\n2\n1368\n949\n19\n39\n59\n14\n14\n12\n20\n0x9929D49B",
     "hidden": true
    },
    {
     "input": "150\nREV\nGET 9 9\nSET 2 2 2\nSET 26 3 4\nPOPCNT\nGET 15 9\nGET 10 7\nSET 7 4 4\nPOPCNT\nSET 20 3 6\nPOPCNT\nSET 14 1 1\nGET 2 4\nSET 20 2 1\nTOGGLE 15 12\nGET 6 4\nREV\nREV\nPOPCNT\nGET 3 5\nGET 1 10\nGET 2 12\nSET 20 12 454\nTOGGLE 19 7\nREV\nSET 2 4 2\nREV\nGET 21 10\nGET 4 3\nSET 12 12 3101\nSET 22 8 121\nTOGGLE 10 12\nPOPCNT\nSET 19 12 1738\nTOGGLE 21 4\nGET 12 10\nPOPCNT\nSET 23 5 15\nGET 12 1\nTOGGLE 10 3\nGET 20 3\nGET 22 10\nGET 26 4\nREV\nREV\nGET 19 2\nGET 15 11\nREV\nSET 6 2 3\nGET 16 9\nSET 13 9 76\nREV\nGET 15 12\nTOGGLE 21 6\nSET 20 9 118\nREV\nSET 0 9 142\nPOPCNT\nSET 5 4 3\nSET 21 4 10\nTOGGLE 25 4\nPOPCNT\nGET 16 3\nSET 1 6 4\nSET 0 9 347\nSET 13 11 548\nGET 20 7\nTOGGLE 14 4\nREV\nTOGGLE 6 7\nPOPCNT\nSET 12 10 749\nREV\nPOPCNT\nPOPCNT\nTOGGLE 19 12\nREV\nSET 22 9 187\nSET 12 6 50\nTOGGLE 23 6\nSET 20 7 8\nSET 8 2 2\nGET 25 6\nSET 14 8 15\nSET 20 3 4\nGET 22 10\nPOPCNT\nREV\nGET 23 6\nSET 14 2 3\nSET 13 11 1990\nSET 19 9 18\nGET 15 9\nSET 28 1 1\nTOGGLE 6 4\nPOPCNT\nREV\nSET 3 9 188\nSET 4 3 5\nREV\nGET 16 11\nGET 25 2\nREV\nGET 0 3\nPOPCNT\nTOGGLE 25 5\nPOPCNT\nGET 16 1\nSET 17 7 127\nSET 14 1 1\nSET 24 5 16\nREV\nGET 13 10\nPOPCNT\nPOPCNT\nPOPCNT\nGET 9 10\nGET 22 3\nGET 7 8\nREV\nPOPCNT\nPOPCNT\nPOPCNT\nTOGGLE 2 12\nTOGGLE 18 5\nSET 18 7 118\nSET 18 9 135\nSET 19 6 32\nPOPCNT\nGET 8 6\nREV\nGET 1 12\nSET 10 7 26\nGET 19 4\nSET 11 8 74\nSET 5 1 0\nPOPCNT\nGET 22 7\nSET 11 3 6\nGET 1 1\nTOGGLE 8 8\nSET 9 7 32\nREV\nTOGGLE 5 8\nSET 5 5 25\nREV\nGET 21 6\nGET 3 8\nGET 0 11\nSET 6 6 53",
     "output": "0\n2\n0\n0\n3\n5\n2\n8\n14\n1\n260\n130\n156\n0\n15\n866\n15\n0\n3\n222\n13\n2\n1900\n76\n3939\n11\n15\n1\n116\n18\n19\n19\n24\n707\n16\n38\n289\n12\n928\n1\n6\n14\n13\n1\n279\n18\n18\n18\n383\n6\n254\n18\n18\n18\n15\n58\n100\n11\n13\n81\n0\n39\n57\n457\n0x54E24D49",
     "hidden": true
    }
   ]
  },
  {
   "id": "es2",
   "title": "Circular Buffer (Overwrite Oldest)",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Implement a ring buffer with capacity C. PUSH x appends x; if the buffer is full the OLDEST element is overwritten (dropped). POP removes and prints the oldest element (or EMPTY). PEEK prints the oldest element without removing it (or EMPTY). SIZE prints the current number of elements.",
   "input": "Line 1: C Q\nNext Q lines: a command",
   "output": "One line per POP, PEEK and SIZE command",
   "constraints": "1 <= C <= 1000, 1 <= Q <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "3 7\nPUSH 1\nPUSH 2\nPUSH 3\nPUSH 4\nPEEK\nPOP\nSIZE",
     "output": "2\n2\n2",
     "hidden": false
    },
    {
     "input": "2 4\nPOP\nPUSH 9\nPEEK\nSIZE",
     "output": "EMPTY\n9\n1",
     "hidden": false
    },
    {
     "input": "3 20\nPEEK\nPUSH 18\nPOP\nPUSH 73\nPUSH 29\nPUSH 95\nPUSH 25\nPOP\nPUSH 23\nPEEK\nPEEK\nSIZE\nPOP\nPOP\nPOP\nPUSH 83\nPUSH 21\nPUSH 26\nPUSH 35\nSIZE",
     "output": "EMPTY\n18\n29\n95\n95\n3\n95\n25\n23\n3",
     "hidden": true
    },
    {
     "input": "4 30\nPEEK\nPUSH 75\nPUSH 14\nPUSH 96\nPEEK\nPUSH 54\nPUSH 83\nPOP\nPEEK\nPEEK\nPUSH 27\nSIZE\nPOP\nPOP\nPOP\nPOP\nPUSH 53\nPOP\nPUSH 47\nPUSH 27\nPEEK\nPOP\nPUSH 57\nPOP\nPEEK\nPOP\nPOP\nPUSH 35\nPUSH 53\nPOP",
     "output": "EMPTY\n75\n14\n96\n96\n4\n96\n54\n83\n27\n53\n47\n47\n27\n57\n57\nEMPTY\n35",
     "hidden": true
    },
    {
     "input": "1 20\nSIZE\nPUSH 90\nPOP\nPEEK\nPOP\nPOP\nPEEK\nPUSH 92\nPUSH 35\nPUSH 41\nPOP\nPOP\nSIZE\nPEEK\nPOP\nPEEK\nSIZE\nPOP\nPUSH 3\nPOP",
     "output": "0\n90\nEMPTY\nEMPTY\nEMPTY\nEMPTY\n41\nEMPTY\n0\nEMPTY\nEMPTY\nEMPTY\n0\nEMPTY\n3",
     "hidden": true
    },
    {
     "input": "5 60\nPOP\nPUSH 30\nPOP\nPUSH 60\nPUSH 79\nPOP\nSIZE\nPUSH 34\nPUSH 2\nPUSH 20\nPEEK\nPEEK\nPOP\nPOP\nPUSH 16\nPUSH 99\nSIZE\nPOP\nPUSH 86\nPOP\nPUSH 52\nPOP\nPEEK\nPUSH 90\nPUSH 88\nSIZE\nPEEK\nPUSH 69\nPEEK\nPEEK\nPUSH 39\nPEEK\nPOP\nPOP\nPUSH 12\nPOP\nPUSH 37\nPUSH 66\nPEEK\nPOP\nSIZE\nPOP\nPUSH 7\nSIZE\nPOP\nPUSH 63\nPEEK\nSIZE\nPOP\nPUSH 99\nPEEK\nPOP\nPEEK\nPUSH 61\nSIZE\nPUSH 34\nPUSH 21\nPEEK\nPOP\nPUSH 55",
     "output": "EMPTY\n30\n60\n1\n79\n79\n79\n34\n4\n2\n20\n16\n99\n5\n99\n86\n86\n52\n52\n90\n88\n69\n69\n4\n39\n4\n12\n37\n4\n37\n66\n66\n7\n4\n63\n63",
     "hidden": true
    },
    {
     "input": "8 120\nPUSH 6\nPUSH 26\nPUSH 39\nPEEK\nPEEK\nPUSH 59\nPUSH 48\nPOP\nPUSH 55\nPUSH 18\nPUSH 43\nPUSH 41\nPUSH 35\nPOP\nPUSH 33\nPUSH 2\nPOP\nSIZE\nPOP\nPUSH 76\nPUSH 8\nPEEK\nPUSH 97\nPEEK\nPEEK\nPEEK\nPEEK\nPUSH 18\nPUSH 94\nPUSH 49\nPOP\nPOP\nPEEK\nPOP\nPEEK\nPUSH 40\nPOP\nPEEK\nPOP\nPUSH 54\nPUSH 65\nPUSH 11\nSIZE\nPUSH 11\nPUSH 89\nPUSH 18\nPOP\nPUSH 81\nPUSH 34\nPOP\nPUSH 39\nSIZE\nPUSH 95\nPUSH 9\nPUSH 45\nPOP\nPOP\nPUSH 71\nPOP\nPEEK\nPOP\nPUSH 91\nPOP\nPEEK\nPUSH 45\nPOP\nPOP\nPUSH 9\nSIZE\nPUSH 17\nPUSH 2\nPUSH 34\nPUSH 10\nPUSH 99\nPUSH 70\nSIZE\nPOP\nSIZE\nPUSH 30\nPOP\nPOP\nPEEK\nPOP\nPOP\nPUSH 90\nPUSH 71\nSIZE\nPEEK\nPUSH 19\nPUSH 16\nSIZE\nPOP\nPUSH 72\nPUSH 19\nPOP\nSIZE\nPOP\nPEEK\nPOP\nPUSH 17\nPUSH 9\nSIZE\nPOP\nPUSH 61\nPUSH 71\nPOP\nPUSH 57\nPOP\nPUSH 70\nPEEK\nPOP\nPUSH 20\nPEEK\nPUSH 59\nPUSH 75\nPUSH 94\nPUSH 17\nPEEK\nPUSH 58\nPUSH 84",
     "output": "6\n6\n6\n39\n48\n7\n55\n18\n43\n43\n43\n43\n33\n2\n76\n76\n8\n8\n97\n97\n7\n49\n54\n8\n89\n18\n81\n34\n34\n39\n95\n95\n9\n5\n8\n45\n7\n9\n17\n2\n2\n34\n6\n10\n8\n10\n70\n7\n30\n90\n90\n7\n71\n19\n16\n72\n72\n19\n71",
     "hidden": true
    }
   ]
  }
 ],
 "app": [
  {
   "id": "app1",
   "title": "LRU Cache for an App",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Design a Least-Recently-Used cache of capacity C. PUT k v inserts or updates key k (making it most recently used); when size would exceed C the least recently used key is evicted. GET k prints the value of k (or -1 if absent) and makes k most recently used.",
   "input": "Line 1: C Q\nNext Q lines: PUT k v | GET k",
   "output": "One line per GET command",
   "constraints": "1 <= C <= 1000, 1 <= Q <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "2 7\nPUT 1 1\nPUT 2 2\nGET 1\nPUT 3 3\nGET 2\nPUT 4 4\nGET 1",
     "output": "1\n-1\n-1",
     "hidden": false
    },
    {
     "input": "1 4\nPUT 5 50\nGET 5\nPUT 6 60\nGET 5",
     "output": "50\n-1",
     "hidden": false
    },
    {
     "input": "3 20\nPUT 5 75\nPUT 1 94\nGET 3\nPUT 1 16\nGET 2\nPUT 3 22\nGET 1\nGET 6\nPUT 2 94\nGET 3\nPUT 4 74\nGET 5\nGET 5\nGET 2\nGET 3\nPUT 5 40\nPUT 6 54\nPUT 6 61\nGET 5\nGET 6",
     "output": "-1\n-1\n16\n-1\n22\n-1\n-1\n94\n22\n40\n61",
     "hidden": true
    },
    {
     "input": "4 40\nGET 5\nPUT 7 82\nPUT 4 58\nGET 7\nPUT 5 24\nPUT 5 40\nGET 6\nPUT 6 87\nGET 6\nPUT 6 52\nPUT 4 74\nGET 2\nGET 6\nGET 5\nGET 7\nPUT 7 43\nPUT 8 55\nPUT 1 26\nGET 3\nPUT 7 6\nGET 7\nGET 7\nPUT 5 10\nGET 6\nGET 4\nPUT 7 42\nPUT 6 91\nPUT 5 54\nGET 8\nGET 8\nGET 3\nGET 1\nPUT 7 9\nPUT 4 97\nPUT 5 39\nPUT 2 21\nPUT 2 38\nPUT 4 8\nGET 4\nGET 2",
     "output": "-1\n82\n-1\n87\n-1\n52\n40\n82\n-1\n6\n6\n-1\n-1\n-1\n-1\n-1\n26\n8\n38",
     "hidden": true
    },
    {
     "input": "2 30\nGET 2\nPUT 1 55\nGET 1\nGET 1\nGET 2\nPUT 3 76\nPUT 4 86\nGET 3\nPUT 3 96\nPUT 2 91\nGET 3\nGET 2\nPUT 1 47\nGET 4\nGET 3\nPUT 5 98\nGET 5\nPUT 1 83\nPUT 1 40\nPUT 4 38\nPUT 2 67\nPUT 1 82\nPUT 5 31\nPUT 5 73\nGET 2\nPUT 3 1\nPUT 2 94\nGET 2\nGET 4\nGET 1",
     "output": "-1\n55\n55\n-1\n76\n96\n91\n-1\n-1\n98\n-1\n94\n-1\n-1",
     "hidden": true
    },
    {
     "input": "5 80\nPUT 4 84\nPUT 5 49\nPUT 10 55\nPUT 5 27\nPUT 8 49\nPUT 5 62\nPUT 6 32\nPUT 7 27\nGET 6\nGET 8\nGET 3\nPUT 6 14\nPUT 9 52\nGET 4\nGET 4\nPUT 5 54\nGET 10\nPUT 6 1\nPUT 10 15\nPUT 8 8\nPUT 4 83\nPUT 6 33\nPUT 8 40\nPUT 8 46\nGET 5\nPUT 5 6\nGET 7\nGET 7\nPUT 2 95\nGET 8\nPUT 7 84\nPUT 2 27\nPUT 10 67\nGET 8\nGET 3\nPUT 3 34\nPUT 3 35\nPUT 7 2\nPUT 1 27\nPUT 2 50\nPUT 8 79\nGET 7\nPUT 6 42\nPUT 7 40\nGET 6\nPUT 5 43\nGET 8\nPUT 3 66\nPUT 5 86\nGET 4\nGET 1\nGET 4\nGET 2\nPUT 6 23\nPUT 5 77\nGET 9\nGET 2\nPUT 9 75\nPUT 4 23\nGET 7\nPUT 5 86\nPUT 6 3\nGET 3\nGET 7\nGET 10\nGET 3\nPUT 9 49\nPUT 4 80\nPUT 4 98\nGET 10\nGET 10\nPUT 4 29\nPUT 6 57\nPUT 3 40\nGET 6\nGET 2\nGET 2\nPUT 8 57\nGET 4\nGET 4",
     "output": "32\n49\n-1\n-1\n-1\n-1\n54\n-1\n-1\n46\n46\n-1\n2\n42\n79\n-1\n-1\n-1\n-1\n-1\n-1\n-1\n66\n-1\n-1\n66\n-1\n-1\n57\n-1\n-1\n29\n29",
     "hidden": true
    },
    {
     "input": "10 150\nPUT 17 76\nGET 18\nGET 4\nPUT 13 1\nGET 7\nPUT 10 63\nGET 3\nGET 17\nGET 8\nPUT 10 38\nGET 15\nGET 9\nPUT 6 57\nGET 19\nPUT 1 55\nPUT 5 10\nGET 12\nGET 18\nPUT 11 42\nPUT 14 99\nGET 12\nGET 14\nGET 10\nGET 14\nPUT 2 57\nGET 12\nPUT 15 74\nPUT 13 32\nPUT 4 37\nPUT 13 67\nPUT 1 90\nGET 5\nGET 5\nPUT 4 66\nPUT 3 23\nGET 4\nPUT 13 86\nPUT 5 62\nPUT 11 58\nPUT 11 75\nGET 3\nPUT 7 38\nGET 20\nPUT 16 76\nGET 16\nGET 5\nGET 11\nGET 9\nPUT 11 55\nPUT 2 5\nGET 4\nPUT 17 50\nGET 13\nPUT 6 35\nPUT 16 51\nGET 1\nGET 14\nGET 6\nPUT 8 74\nGET 19\nPUT 1 22\nPUT 20 19\nGET 13\nGET 9\nPUT 16 74\nGET 9\nGET 5\nGET 13\nGET 1\nPUT 12 24\nPUT 16 84\nGET 5\nGET 12\nPUT 9 70\nPUT 7 74\nPUT 19 34\nPUT 19 37\nPUT 3 61\nGET 2\nGET 15\nGET 7\nGET 19\nPUT 12 10\nPUT 16 3\nPUT 6 35\nPUT 16 63\nPUT 17 63\nPUT 11 45\nPUT 1 37\nGET 4\nGET 11\nGET 16\nGET 4\nGET 2\nPUT 14 57\nPUT 11 86\nPUT 18 48\nPUT 6 96\nGET 4\nPUT 4 65\nGET 12\nGET 13\nPUT 7 75\nPUT 16 69\nPUT 4 64\nGET 1\nGET 18\nGET 1\nGET 6\nPUT 3 51\nGET 5\nPUT 6 90\nPUT 12 41\nGET 5\nGET 12\nGET 1\nPUT 19 22\nGET 15\nPUT 19 39\nGET 14\nPUT 14 47\nPUT 9 31\nPUT 7 57\nPUT 5 8\nPUT 15 85\nPUT 9 78\nGET 16\nPUT 10 13\nPUT 4 39\nGET 18\nGET 1\nGET 19\nGET 12\nGET 20\nGET 18\nGET 2\nGET 8\nPUT 19 24\nGET 3\nGET 5\nGET 20\nGET 20\nPUT 2 42\nPUT 8 1\nGET 4\nGET 9\nGET 8\nGET 2\nPUT 12 30\nGET 11",
     "output": "-1\n-1\n-1\n-1\n76\n-1\n-1\n-1\n-1\n-1\n-1\n-1\n99\n38\n99\n-1\n10\n10\n66\n23\n-1\n76\n62\n75\n-1\n66\n86\n-1\n-1\n35\n-1\n86\n-1\n-1\n-1\n86\n22\n-1\n24\n-1\n-1\n74\n37\n-1\n45\n63\n-1\n-1\n-1\n10\n-1\n37\n48\n37\n96\n-1\n-1\n41\n37\n-1\n-1\n-1\n-1\n37\n39\n41\n-1\n-1\n-1\n-1\n-1\n8\n-1\n-1\n39\n78\n1\n42\n-1",
     "hidden": true
    }
   ]
  },
  {
   "id": "app2",
   "title": "Sort App Version Strings",
   "difficulty": "Hard",
   "type": "code",
   "desc": "Sort N app version strings in ascending order. A version is 1-4 dot-separated non-negative integers, optionally followed by '-alpha', '-beta' or '-rc'. Compare numbers numerically (missing parts count as 0, so 1.2 == 1.2.0). For equal numbers, a pre-release is LOWER than the release, and alpha < beta < rc. Versions that compare fully equal keep their input order (stable sort).",
   "input": "Line 1: N\nNext N lines: a version string",
   "output": "N lines: the sorted versions",
   "constraints": "1 <= N <= 100000",
   "langs": [
    "python",
    "java",
    "c",
    "cpp",
    "javascript"
   ],
   "tests": [
    {
     "input": "5\n1.2.10\n1.2.9\n1.2.9-beta\n1.10\n1.2",
     "output": "1.2\n1.2.9-beta\n1.2.9\n1.2.10\n1.10",
     "hidden": false
    },
    {
     "input": "4\n2.0-rc\n2.0\n2.0.0-alpha\n2",
     "output": "2.0.0-alpha\n2.0-rc\n2.0\n2",
     "hidden": false
    },
    {
     "input": "8\n1.1.2-alpha\n2.2-beta\n0.3.3\n3.2.0.3\n1.2.2.1-alpha\n2\n3.0-alpha\n1.0.3.3",
     "output": "0.3.3\n1.0.3.3\n1.1.2-alpha\n1.2.2.1-alpha\n2\n2.2-beta\n3.0-alpha\n3.2.0.3",
     "hidden": true
    },
    {
     "input": "12\n3-alpha\n3.0.0\n0.2-alpha\n1.3\n2.2.3\n2.1.2\n2.2.1-rc\n3.2\n0\n1.3.1.3-rc\n0.3.2.0\n3-rc",
     "output": "0\n0.2-alpha\n0.3.2.0\n1.3\n1.3.1.3-rc\n2.1.2\n2.2.1-rc\n2.2.3\n3-alpha\n3-rc\n3.0.0\n3.2",
     "hidden": true
    },
    {
     "input": "15\n1.1.1-beta\n3-beta\n3-alpha\n2\n0\n1.0-rc\n1.1-beta\n0.3.3.2\n0-alpha\n1.2.3.3\n0.2.3.2\n2.1\n2.1.0.3\n2.3.0.3-rc\n3.0-alpha",
     "output": "0-alpha\n0\n0.2.3.2\n0.3.3.2\n1.0-rc\n1.1-beta\n1.1.1-beta\n1.2.3.3\n2\n2.1\n2.1.0.3\n2.3.0.3-rc\n3-alpha\n3.0-alpha\n3-beta",
     "hidden": true
    },
    {
     "input": "25\n2.1-alpha\n3-beta\n0.1\n3.1.1.3\n1.1\n3.3.1.2-rc\n1\n0.0.3\n1.1.2\n3.1.3.0-rc\n3-rc\n3-rc\n1.0.3.1\n2.2\n0.2.1.1\n2\n3.0.3\n1.1.1-alpha\n3.0\n2.1.2\n2.2.1.1-rc\n3.0.3.3\n1.2.3.0\n2.2.1\n2.3",
     "output": "0.0.3\n0.1\n0.2.1.1\n1\n1.0.3.1\n1.1\n1.1.1-alpha\n1.1.2\n1.2.3.0\n2\n2.1-alpha\n2.1.2\n2.2\n2.2.1\n2.2.1.1-rc\n2.3\n3-beta\n3-rc\n3-rc\n3.0\n3.0.3\n3.0.3.3\n3.1.1.3\n3.1.3.0-rc\n3.3.1.2-rc",
     "hidden": true
    },
    {
     "input": "40\n2.1.0\n0-beta\n1\n2.2.0\n2.3\n0.2.3.2\n3.0\n0.1-rc\n3.2-beta\n1.3.3.1\n1.1\n3\n3-rc\n1.2.1\n3\n3-alpha\n0.3.0\n1\n0\n1-alpha\n3.1.0-alpha\n3.3.3-beta\n3.0.1.3\n0.0.1.0-beta\n0.3.0.0-alpha\n2.0.2.2-alpha\n2.3.2.2-beta\n2\n1.2\n3.0\n0.0.0.2\n2.3-rc\n1.3\n1\n0.3.2\n2\n0.1.1.0-rc\n1.3.3.1-alpha\n1-rc\n0.3.0",
     "output": "0-beta\n0\n0.0.0.2\n0.0.1.0-beta\n0.1-rc\n0.1.1.0-rc\n0.2.3.2\n0.3.0.0-alpha\n0.3.0\n0.3.0\n0.3.2\n1-alpha\n1-rc\n1\n1\n1\n1.1\n1.2\n1.2.1\n1.3\n1.3.3.1-alpha\n1.3.3.1\n2\n2\n2.0.2.2-alpha\n2.1.0\n2.2.0\n2.3-rc\n2.3\n2.3.2.2-beta\n3-alpha\n3-rc\n3.0\n3\n3\n3.0\n3.0.1.3\n3.1.0-alpha\n3.2-beta\n3.3.3-beta",
     "hidden": true
    }
   ]
  }
 ],
 "da": [
  {
   "id": "da1",
   "title": "Top 3 Products per Category",
   "difficulty": "Hard",
   "type": "sql",
   "desc": "Table sales(sale_id, product, category, qty, price). Revenue of a product = SUM(qty * price) across all its sales rows. For every category return its TOP 3 products by revenue (ties broken by product name A-Z). Return columns: category, product, revenue. Order the result by category ASC, revenue DESC, product ASC.",
   "input": "Table: sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER)",
   "output": "Columns: category, product, revenue (column names are not checked, values and row order are)",
   "constraints": "Window functions (ROW_NUMBER/RANK) and CTEs are supported.",
   "langs": [
    "sql"
   ],
   "ref": "WITH r AS (SELECT category, product, SUM(qty*price) AS revenue FROM sales GROUP BY category, product), k AS (SELECT category, product, revenue, ROW_NUMBER() OVER (PARTITION BY category ORDER BY revenue DESC, product ASC) AS rn FROM r) SELECT category, product, revenue FROM k WHERE rn <= 3 ORDER BY category ASC, revenue DESC, product ASC",
   "tests": [
    {
     "setup": "CREATE TABLE sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER);\nINSERT INTO sales VALUES (1,'ProBook','Laptops',2,321),(2,'Gamer','Laptops',9,297),(3,'Slim','Laptops',8,480),(4,'Lite','Phones',1,280),(5,'Orbit','Phones',1,119),(6,'Bar','Audio',7,52),(7,'Gamer','Laptops',2,121),(8,'Slim','Laptops',5,137);",
     "hidden": false
    },
    {
     "setup": "CREATE TABLE sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER);\nINSERT INTO sales VALUES (1,'Pixel9','Phones',2,57),(2,'Orbit','Phones',9,340),(3,'Nova','Phones',3,218),(4,'Buds','Audio',6,224),(5,'Ring','Wearables',3,284),(6,'AirBook','Laptops',9,33),(7,'Dome','Audio',2,293),(8,'Tag','Wearables',7,138),(9,'Zeta','Phones',5,96),(10,'Bar','Audio',1,476),(11,'Watch','Wearables',7,135),(12,'Band','Wearables',9,459),(13,'Ring','Wearables',6,103),(14,'Bar','Audio',1,489);",
     "hidden": false
    },
    {
     "setup": "CREATE TABLE sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER);\nINSERT INTO sales VALUES (1,'Dome','Audio',1,68),(2,'Lite','Phones',1,487),(3,'Slim','Laptops',5,85),(4,'Orbit','Phones',6,134),(5,'ProBook','Laptops',4,236),(6,'Gamer','Laptops',3,449),(7,'Nova','Phones',8,44),(8,'Buds','Audio',1,73),(9,'Dome','Audio',5,494),(10,'AirBook','Laptops',8,186),(11,'Tag','Wearables',4,263),(12,'Dome','Audio',4,441),(13,'Watch','Wearables',6,322),(14,'Tag','Wearables',4,211),(15,'ProBook','Laptops',5,85),(16,'Orbit','Phones',8,138),(17,'Pixel9','Phones',1,374),(18,'Zeta','Phones',8,225),(19,'AirBook','Laptops',2,201),(20,'AirBook','Laptops',9,132);",
     "hidden": true
    },
    {
     "setup": "CREATE TABLE sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER);\nINSERT INTO sales VALUES (1,'Pixel9','Phones',2,35),(2,'Dome','Audio',9,295),(3,'Slim','Laptops',8,363),(4,'Slim','Laptops',6,414),(5,'Ring','Wearables',8,382),(6,'Buds','Audio',3,368),(7,'Ring','Wearables',6,260),(8,'Orbit','Phones',7,77),(9,'Tag','Wearables',5,154),(10,'Ring','Wearables',7,340),(11,'Gamer','Laptops',1,288),(12,'Band','Wearables',5,140),(13,'Tag','Wearables',4,301),(14,'Zeta','Phones',9,187),(15,'Tag','Wearables',9,243),(16,'Watch','Wearables',3,13),(17,'Bar','Audio',8,294),(18,'Lite','Phones',9,102),(19,'Watch','Wearables',3,38),(20,'Nova','Phones',4,340),(21,'Dome','Audio',8,440),(22,'Gamer','Laptops',5,341),(23,'Buds','Audio',3,353),(24,'Band','Wearables',4,241),(25,'Pixel9','Phones',7,200),(26,'Tag','Wearables',5,291),(27,'ProBook','Laptops',9,345),(28,'Dome','Audio',2,196),(29,'Dome','Audio',6,277),(30,'Pixel9','Phones',2,22);",
     "hidden": true
    },
    {
     "setup": "CREATE TABLE sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER);\nINSERT INTO sales VALUES (1,'Lite','Phones',6,497),(2,'Band','Wearables',2,344),(3,'Orbit','Phones',3,132),(4,'Zeta','Phones',4,226),(5,'Buds','Audio',5,82),(6,'AirBook','Laptops',9,106),(7,'Slim','Laptops',2,422),(8,'Buds','Audio',4,307),(9,'ProBook','Laptops',7,379),(10,'Zeta','Phones',8,238),(11,'ProBook','Laptops',5,289),(12,'Bar','Audio',2,412),(13,'Pixel9','Phones',7,211),(14,'Lite','Phones',1,170),(15,'Gamer','Laptops',2,323),(16,'Buds','Audio',5,93),(17,'Buds','Audio',7,340),(18,'Pixel9','Phones',4,430),(19,'Gamer','Laptops',1,470),(20,'Gamer','Laptops',8,259),(21,'Tag','Wearables',6,191),(22,'Nova','Phones',6,126),(23,'Nova','Phones',6,37),(24,'ProBook','Laptops',2,40),(25,'Pixel9','Phones',4,185),(26,'Lite','Phones',1,258),(27,'AirBook','Laptops',4,167),(28,'Nova','Phones',4,315),(29,'Orbit','Phones',4,464),(30,'Dome','Audio',7,371),(31,'AirBook','Laptops',4,471),(32,'AirBook','Laptops',8,119),(33,'Bar','Audio',2,154),(34,'Bar','Audio',4,52),(35,'Bar','Audio',7,433),(36,'Lite','Phones',9,443),(37,'Slim','Laptops',6,94),(38,'ProBook','Laptops',5,406),(39,'Band','Wearables',2,473),(40,'Lite','Phones',5,370),(41,'Dome','Audio',5,484),(42,'AirBook','Laptops',8,11),(43,'Dome','Audio',8,369),(44,'Watch','Wearables',5,189),(45,'Lite','Phones',8,102);",
     "hidden": true
    },
    {
     "setup": "CREATE TABLE sales(sale_id INTEGER, product TEXT, category TEXT, qty INTEGER, price INTEGER);\nINSERT INTO sales VALUES (1,'Bar','Audio',8,45),(2,'Nova','Phones',3,231),(3,'ProBook','Laptops',2,278),(4,'Bar','Audio',2,246),(5,'Dome','Audio',7,274),(6,'Bar','Audio',3,223),(7,'Dome','Audio',2,233),(8,'Pixel9','Phones',4,426),(9,'Orbit','Phones',3,396),(10,'Buds','Audio',3,76),(11,'Gamer','Laptops',6,85),(12,'Buds','Audio',1,457),(13,'Tag','Wearables',8,14),(14,'Gamer','Laptops',5,467),(15,'Dome','Audio',7,32),(16,'Bar','Audio',8,384),(17,'AirBook','Laptops',4,158),(18,'Dome','Audio',3,58),(19,'Gamer','Laptops',1,257),(20,'Band','Wearables',4,489),(21,'AirBook','Laptops',7,47),(22,'Nova','Phones',2,101),(23,'Nova','Phones',2,178),(24,'Gamer','Laptops',3,396),(25,'Ring','Wearables',1,238),(26,'Orbit','Phones',2,340),(27,'Lite','Phones',2,195),(28,'AirBook','Laptops',6,248),(29,'Nova','Phones',4,242),(30,'Band','Wearables',6,232),(31,'Tag','Wearables',2,341),(32,'Zeta','Phones',5,459),(33,'Buds','Audio',4,77),(34,'Ring','Wearables',9,151),(35,'ProBook','Laptops',3,63),(36,'Ring','Wearables',8,83),(37,'Band','Wearables',3,66),(38,'Ring','Wearables',9,70),(39,'Zeta','Phones',4,73),(40,'Nova','Phones',5,190),(41,'Zeta','Phones',9,264),(42,'Tag','Wearables',1,304),(43,'Gamer','Laptops',6,462),(44,'Slim','Laptops',9,320),(45,'Pixel9','Phones',5,242),(46,'Ring','Wearables',3,89),(47,'Lite','Phones',6,431),(48,'Zeta','Phones',2,283),(49,'Pixel9','Phones',9,315),(50,'Zeta','Phones',9,422),(51,'Bar','Audio',5,28),(52,'Pixel9','Phones',1,252),(53,'Tag','Wearables',9,15),(54,'Buds','Audio',2,338),(55,'Nova','Phones',9,408),(56,'Buds','Audio',7,69),(57,'Gamer','Laptops',4,348),(58,'Gamer','Laptops',7,74),(59,'Band','Wearables',4,204),(60,'Zeta','Phones',8,89);",
     "hidden": true
    }
   ]
  },
  {
   "id": "da2",
   "title": "Customers With 3+ Consecutive Order Days",
   "difficulty": "Hard",
   "type": "sql",
   "desc": "Table orders(order_id, customer_id, order_date) where order_date is 'YYYY-MM-DD'. Find customers who placed orders on at least 3 CONSECUTIVE calendar days (multiple orders on one day count as that one day). Return a single column customer_id, each customer once, ordered by customer_id ascending. Tip: SQLite date functions such as julianday() and date() are available; DATEDIFF(a,b) and CONCAT() shims are also provided for MySQL habits.",
   "input": "Table: orders(order_id INTEGER, customer_id INTEGER, order_date TEXT)",
   "output": "Column: customer_id",
   "constraints": "Window functions and CTEs are supported.",
   "langs": [
    "sql"
   ],
   "ref": "WITH d AS (SELECT DISTINCT customer_id, order_date FROM orders), g AS (SELECT customer_id, order_date, julianday(order_date) - ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS grp FROM d) SELECT DISTINCT customer_id FROM g GROUP BY customer_id, grp HAVING COUNT(*) >= 3 ORDER BY customer_id",
   "tests": [
    {
     "setup": "CREATE TABLE orders(order_id INTEGER, customer_id INTEGER, order_date TEXT);\nINSERT INTO orders VALUES (1,1,'2026-03-01'),(2,1,'2026-03-02'),(3,1,'2026-03-02'),(4,1,'2026-03-03'),(5,2,'2026-03-01'),(6,2,'2026-03-03'),(7,2,'2026-03-04'),(8,3,'2026-03-05'),(9,3,'2026-03-06'),(10,3,'2026-03-07'),(11,3,'2026-03-09');",
     "hidden": false
    },
    {
     "setup": "CREATE TABLE orders(order_id INTEGER, customer_id INTEGER, order_date TEXT);\nINSERT INTO orders VALUES (1,2,'2026-03-04'),(2,3,'2026-03-08'),(3,1,'2026-03-03'),(4,2,'2026-03-12'),(5,2,'2026-03-15'),(6,4,'2026-03-04'),(7,2,'2026-03-15'),(8,1,'2026-03-05'),(9,2,'2026-03-10'),(10,4,'2026-03-13'),(11,1,'2026-03-05'),(12,1,'2026-03-10'),(13,1,'2026-03-04'),(14,2,'2026-03-10'),(15,4,'2026-03-15'),(16,3,'2026-03-09'),(17,4,'2026-03-11'),(18,2,'2026-03-13'),(19,3,'2026-03-10'),(20,1,'2026-03-03');",
     "hidden": false
    },
    {
     "setup": "CREATE TABLE orders(order_id INTEGER, customer_id INTEGER, order_date TEXT);\nINSERT INTO orders VALUES (1,2,'2026-03-05'),(2,4,'2026-03-11'),(3,3,'2026-03-01'),(4,3,'2026-03-07'),(5,3,'2026-03-10'),(6,3,'2026-03-08'),(7,2,'2026-03-07'),(8,5,'2026-03-11'),(9,4,'2026-03-14'),(10,5,'2026-03-05'),(11,1,'2026-03-10'),(12,2,'2026-03-11'),(13,2,'2026-03-06'),(14,1,'2026-03-08'),(15,2,'2026-03-12'),(16,4,'2026-03-10'),(17,3,'2026-03-11'),(18,1,'2026-03-07'),(19,4,'2026-03-12'),(20,5,'2026-03-13'),(21,5,'2026-03-11'),(22,3,'2026-03-07'),(23,1,'2026-03-01'),(24,4,'2026-03-04'),(25,5,'2026-03-05'),(26,4,'2026-03-07'),(27,1,'2026-03-11'),(28,1,'2026-03-15'),(29,1,'2026-03-04'),(30,4,'2026-03-05');",
     "hidden": true
    },
    {
     "setup": "CREATE TABLE orders(order_id INTEGER, customer_id INTEGER, order_date TEXT);\nINSERT INTO orders VALUES (1,2,'2026-03-06'),(2,3,'2026-03-05'),(3,6,'2026-03-10'),(4,4,'2026-03-13'),(5,5,'2026-03-15'),(6,2,'2026-03-13'),(7,2,'2026-03-05'),(8,6,'2026-03-06'),(9,6,'2026-03-06'),(10,4,'2026-03-12'),(11,2,'2026-03-12'),(12,5,'2026-03-03'),(13,6,'2026-03-13'),(14,6,'2026-03-05'),(15,3,'2026-03-01'),(16,3,'2026-03-07'),(17,6,'2026-03-12'),(18,2,'2026-03-03'),(19,6,'2026-03-01'),(20,6,'2026-03-15'),(21,2,'2026-03-02'),(22,3,'2026-03-05'),(23,4,'2026-03-08'),(24,6,'2026-03-09'),(25,3,'2026-03-12'),(26,3,'2026-03-01'),(27,5,'2026-03-12'),(28,2,'2026-03-10'),(29,3,'2026-03-15'),(30,1,'2026-03-07'),(31,1,'2026-03-09'),(32,5,'2026-03-02'),(33,4,'2026-03-13'),(34,3,'2026-03-04'),(35,5,'2026-03-10'),(36,3,'2026-03-09'),(37,5,'2026-03-08'),(38,1,'2026-03-06'),(39,2,'2026-03-01'),(40,3,'2026-03-13');",
     "hidden": true
    },
    {
     "setup": "CREATE TABLE orders(order_id INTEGER, customer_id INTEGER, order_date TEXT);\nINSERT INTO orders VALUES (1,1,'2026-03-12'),(2,3,'2026-03-08'),(3,1,'2026-03-11'),(4,3,'2026-03-07'),(5,3,'2026-03-05'),(6,2,'2026-03-04'),(7,2,'2026-03-15'),(8,2,'2026-03-10'),(9,2,'2026-03-01'),(10,2,'2026-03-13'),(11,1,'2026-03-01'),(12,2,'2026-03-02'),(13,3,'2026-03-11'),(14,2,'2026-03-08'),(15,1,'2026-03-13'),(16,3,'2026-03-06'),(17,1,'2026-03-03'),(18,3,'2026-03-08'),(19,1,'2026-03-12'),(20,2,'2026-03-06'),(21,3,'2026-03-06'),(22,1,'2026-03-11'),(23,2,'2026-03-07'),(24,2,'2026-03-04'),(25,2,'2026-03-15');",
     "hidden": true
    },
    {
     "setup": "CREATE TABLE orders(order_id INTEGER, customer_id INTEGER, order_date TEXT);\nINSERT INTO orders VALUES (1,7,'2026-03-10'),(2,3,'2026-03-15'),(3,8,'2026-03-15'),(4,6,'2026-03-15'),(5,6,'2026-03-03'),(6,8,'2026-03-12'),(7,1,'2026-03-06'),(8,6,'2026-03-02'),(9,7,'2026-03-14'),(10,4,'2026-03-02'),(11,1,'2026-03-01'),(12,6,'2026-03-15'),(13,8,'2026-03-05'),(14,2,'2026-03-05'),(15,3,'2026-03-01'),(16,1,'2026-03-11'),(17,1,'2026-03-09'),(18,3,'2026-03-14'),(19,1,'2026-03-13'),(20,3,'2026-03-13'),(21,6,'2026-03-07'),(22,6,'2026-03-10'),(23,7,'2026-03-10'),(24,2,'2026-03-11'),(25,5,'2026-03-11'),(26,8,'2026-03-14'),(27,7,'2026-03-03'),(28,6,'2026-03-04'),(29,2,'2026-03-15'),(30,8,'2026-03-15'),(31,7,'2026-03-12'),(32,2,'2026-03-08'),(33,2,'2026-03-07'),(34,7,'2026-03-01'),(35,8,'2026-03-02'),(36,8,'2026-03-05'),(37,5,'2026-03-07'),(38,2,'2026-03-12'),(39,1,'2026-03-12'),(40,6,'2026-03-09'),(41,3,'2026-03-04'),(42,8,'2026-03-07'),(43,5,'2026-03-09'),(44,6,'2026-03-04'),(45,1,'2026-03-08'),(46,4,'2026-03-03'),(47,6,'2026-03-09'),(48,5,'2026-03-10'),(49,2,'2026-03-05'),(50,7,'2026-03-07'),(51,8,'2026-03-02'),(52,8,'2026-03-01'),(53,3,'2026-03-01'),(54,3,'2026-03-02'),(55,6,'2026-03-14'),(56,2,'2026-03-14'),(57,2,'2026-03-08'),(58,7,'2026-03-06'),(59,7,'2026-03-11'),(60,1,'2026-03-14');",
     "hidden": true
    }
   ]
  }
 ]
};
