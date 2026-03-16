// Total Problems: 750
const TOPICS = [
  {
    "id": "basics",
    "name": "Learn the Basics",
    "icon": "🧠",
    "color": "#00e5ff",
    "problems": [
      {
        "id": "p590",
        "name": "Basics Problem 590",
        "platform": "codechef",
        "code": "CCPROB590",
        "link": "https://www.codechef.com/problems/CCPROB590",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 821,
        "striver": false,
        "tags": [
          "recursion"
        ],
        "description": "Solve Basics Problem 590. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p093",
        "name": "Basics Problem 93",
        "platform": "leetcode",
        "code": "LC93",
        "link": "https://leetcode.com/problems/basics-problem-93/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 826,
        "striver": true,
        "tags": [
          "arrays",
          "graphs",
          "trees"
        ],
        "description": "Solve Basics Problem 93. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "graphs"
        ],
        "companies": [
          "meta",
          "google"
        ]
      },
      {
        "id": "p430",
        "name": "Basics Problem 430",
        "platform": "codechef",
        "code": "CCPROB430",
        "link": "https://www.codechef.com/problems/CCPROB430",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 847,
        "striver": true,
        "tags": [
          "trees",
          "math"
        ],
        "description": "Solve Basics Problem 430. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p161",
        "name": "Basics Problem 161",
        "platform": "leetcode",
        "code": "LC161",
        "link": "https://leetcode.com/problems/basics-problem-161/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 855,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "dp"
        ],
        "description": "Solve Basics Problem 161. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p570",
        "name": "Basics Problem 570",
        "platform": "leetcode",
        "code": "LC570",
        "link": "https://leetcode.com/problems/basics-problem-570/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 867,
        "striver": false,
        "tags": [
          "two-pointers",
          "heap"
        ],
        "description": "Solve Basics Problem 570. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "heap"
        ],
        "companies": [
          "apple",
          "adobe"
        ]
      },
      {
        "id": "p085",
        "name": "Basics Problem 85",
        "platform": "codeforces",
        "code": "CF36B",
        "link": "https://codeforces.com/problemset/problem/36/B",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 873,
        "striver": true,
        "tags": [
          "math",
          "heap",
          "dfs"
        ],
        "description": "Solve Basics Problem 85. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p276",
        "name": "Basics Problem 276",
        "platform": "codeforces",
        "code": "CF862F",
        "link": "https://codeforces.com/problemset/problem/862/F",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 886,
        "striver": true,
        "tags": [
          "strings",
          "hashmap"
        ],
        "description": "Solve Basics Problem 276. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "hashmap"
        ],
        "companies": [
          "meta",
          "uber"
        ]
      },
      {
        "id": "p047",
        "name": "Basics Problem 47",
        "platform": "leetcode",
        "code": "LC47",
        "link": "https://leetcode.com/problems/basics-problem-47/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 888,
        "striver": true,
        "tags": [
          "arrays"
        ],
        "description": "Solve Basics Problem 47. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p277",
        "name": "Basics Problem 277",
        "platform": "leetcode",
        "code": "LC277",
        "link": "https://leetcode.com/problems/basics-problem-277/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 929,
        "striver": true,
        "tags": [
          "greedy",
          "strings"
        ],
        "description": "Solve Basics Problem 277. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "strings"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p473",
        "name": "Basics Problem 473",
        "platform": "codechef",
        "code": "CCPROB473",
        "link": "https://www.codechef.com/problems/CCPROB473",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 948,
        "striver": false,
        "tags": [
          "math",
          "graphs",
          "dp"
        ],
        "description": "Solve Basics Problem 473. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "math",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p551",
        "name": "Basics Problem 551",
        "platform": "codechef",
        "code": "CCPROB551",
        "link": "https://www.codechef.com/problems/CCPROB551",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 965,
        "striver": false,
        "tags": [
          "hashmap",
          "recursion"
        ],
        "description": "Solve Basics Problem 551. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "recursion"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p104",
        "name": "Basics Problem 104",
        "platform": "codechef",
        "code": "CCPROB104",
        "link": "https://www.codechef.com/problems/CCPROB104",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 967,
        "striver": true,
        "tags": [
          "greedy",
          "strings",
          "hashmap"
        ],
        "description": "Solve Basics Problem 104. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "strings"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p620",
        "name": "Basics Problem 620",
        "platform": "leetcode",
        "code": "LC620",
        "link": "https://leetcode.com/problems/basics-problem-620/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 992,
        "striver": false,
        "tags": [
          "graphs",
          "math",
          "arrays"
        ],
        "description": "Solve Basics Problem 620. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p739",
        "name": "Basics Problem 739",
        "platform": "leetcode",
        "code": "LC739",
        "link": "https://leetcode.com/problems/basics-problem-739/",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 1001,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Basics Problem 739. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p489",
        "name": "Basics Problem 489",
        "platform": "codechef",
        "code": "CCPROB489",
        "link": "https://www.codechef.com/problems/CCPROB489",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 1021,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Basics Problem 489. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p423",
        "name": "Basics Problem 423",
        "platform": "codechef",
        "code": "CCPROB423",
        "link": "https://www.codechef.com/problems/CCPROB423",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 1027,
        "striver": true,
        "tags": [
          "recursion",
          "hashmap"
        ],
        "description": "Solve Basics Problem 423. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "hashmap"
        ],
        "companies": [
          "apple",
          "uber"
        ]
      },
      {
        "id": "p214",
        "name": "Basics Problem 214",
        "platform": "codechef",
        "code": "CCPROB214",
        "link": "https://www.codechef.com/problems/CCPROB214",
        "topic": "basics",
        "difficulty": "easy",
        "rating": 1092,
        "striver": true,
        "tags": [
          "two-pointers",
          "strings"
        ],
        "description": "Solve Basics Problem 214. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p569",
        "name": "Basics Problem 569",
        "platform": "leetcode",
        "code": "LC569",
        "link": "https://leetcode.com/problems/basics-problem-569/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1237,
        "striver": false,
        "tags": [
          "dfs",
          "stack"
        ],
        "description": "Solve Basics Problem 569. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "stack"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p282",
        "name": "Basics Problem 282",
        "platform": "codeforces",
        "code": "CF1435A",
        "link": "https://codeforces.com/problemset/problem/1435/A",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1267,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Basics Problem 282. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p195",
        "name": "Basics Problem 195",
        "platform": "codeforces",
        "code": "CF1729B",
        "link": "https://codeforces.com/problemset/problem/1729/B",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1298,
        "striver": true,
        "tags": [
          "strings",
          "heap"
        ],
        "description": "Solve Basics Problem 195. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "heap"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p542",
        "name": "Basics Problem 542",
        "platform": "leetcode",
        "code": "LC542",
        "link": "https://leetcode.com/problems/basics-problem-542/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1315,
        "striver": false,
        "tags": [
          "graphs",
          "arrays"
        ],
        "description": "Solve Basics Problem 542. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "arrays"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p398",
        "name": "Basics Problem 398",
        "platform": "leetcode",
        "code": "LC398",
        "link": "https://leetcode.com/problems/basics-problem-398/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1320,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Basics Problem 398. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "uber",
          "adobe"
        ]
      },
      {
        "id": "p321",
        "name": "Basics Problem 321",
        "platform": "leetcode",
        "code": "LC321",
        "link": "https://leetcode.com/problems/basics-problem-321/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1407,
        "striver": true,
        "tags": [
          "stack",
          "recursion"
        ],
        "description": "Solve Basics Problem 321. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p683",
        "name": "Basics Problem 683",
        "platform": "codeforces",
        "code": "CF32D",
        "link": "https://codeforces.com/problemset/problem/32/D",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1417,
        "striver": false,
        "tags": [
          "dfs",
          "recursion",
          "trees"
        ],
        "description": "Solve Basics Problem 683. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p048",
        "name": "Basics Problem 48",
        "platform": "codeforces",
        "code": "CF687C",
        "link": "https://codeforces.com/problemset/problem/687/C",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1440,
        "striver": true,
        "tags": [
          "stack",
          "heap",
          "math"
        ],
        "description": "Solve Basics Problem 48. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p228",
        "name": "Basics Problem 228",
        "platform": "leetcode",
        "code": "LC228",
        "link": "https://leetcode.com/problems/basics-problem-228/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1494,
        "striver": true,
        "tags": [
          "math",
          "dp",
          "hashmap"
        ],
        "description": "Solve Basics Problem 228. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dp"
        ],
        "companies": [
          "meta",
          "microsoft"
        ]
      },
      {
        "id": "p292",
        "name": "Basics Problem 292",
        "platform": "codeforces",
        "code": "CF1458C",
        "link": "https://codeforces.com/problemset/problem/1458/C",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1500,
        "striver": true,
        "tags": [
          "heap",
          "dp"
        ],
        "description": "Solve Basics Problem 292. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p211",
        "name": "Basics Problem 211",
        "platform": "leetcode",
        "code": "LC211",
        "link": "https://leetcode.com/problems/basics-problem-211/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1571,
        "striver": true,
        "tags": [
          "queue",
          "strings",
          "bit-manipulation"
        ],
        "description": "Solve Basics Problem 211. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "strings"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p642",
        "name": "Basics Problem 642",
        "platform": "leetcode",
        "code": "LC642",
        "link": "https://leetcode.com/problems/basics-problem-642/",
        "topic": "basics",
        "difficulty": "medium",
        "rating": 1582,
        "striver": false,
        "tags": [
          "dfs",
          "queue"
        ],
        "description": "Solve Basics Problem 642. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "queue"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p695",
        "name": "Basics Problem 695",
        "platform": "codeforces",
        "code": "CF544E",
        "link": "https://codeforces.com/problemset/problem/544/E",
        "topic": "basics",
        "difficulty": "hard",
        "rating": 1820,
        "striver": false,
        "tags": [
          "binary-search",
          "queue"
        ],
        "description": "Solve Basics Problem 695. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "queue"
        ],
        "companies": [
          "amazon",
          "microsoft"
        ]
      },
      {
        "id": "p366",
        "name": "Basics Problem 366",
        "platform": "codechef",
        "code": "CCPROB366",
        "link": "https://www.codechef.com/problems/CCPROB366",
        "topic": "basics",
        "difficulty": "hard",
        "rating": 1836,
        "striver": true,
        "tags": [
          "greedy",
          "stack",
          "trees"
        ],
        "description": "Solve Basics Problem 366. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "stack"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p494",
        "name": "Basics Problem 494",
        "platform": "leetcode",
        "code": "LC494",
        "link": "https://leetcode.com/problems/basics-problem-494/",
        "topic": "basics",
        "difficulty": "hard",
        "rating": 2009,
        "striver": false,
        "tags": [
          "arrays"
        ],
        "description": "Solve Basics Problem 494. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p410",
        "name": "Basics Problem 410",
        "platform": "codeforces",
        "code": "CF509C",
        "link": "https://codeforces.com/problemset/problem/509/C",
        "topic": "basics",
        "difficulty": "hard",
        "rating": 2045,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Basics Problem 410. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p185",
        "name": "Basics Problem 185",
        "platform": "codeforces",
        "code": "CF1144G",
        "link": "https://codeforces.com/problemset/problem/1144/G",
        "topic": "basics",
        "difficulty": "hard",
        "rating": 2086,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Basics Problem 185. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p563",
        "name": "Basics Problem 563",
        "platform": "codeforces",
        "code": "CF1703H",
        "link": "https://codeforces.com/problemset/problem/1703/H",
        "topic": "basics",
        "difficulty": "hard",
        "rating": 2309,
        "striver": false,
        "tags": [
          "arrays",
          "bit-manipulation",
          "heap"
        ],
        "description": "Solve Basics Problem 563. Apply core basics concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "bit-manipulation"
        ],
        "companies": [
          "google"
        ]
      }
    ]
  },
  {
    "id": "patterns",
    "name": "Pattern Problems",
    "icon": "🔷",
    "color": "#69f0ae",
    "problems": [
      {
        "id": "p253",
        "name": "Patterns Problem 253",
        "platform": "leetcode",
        "code": "LC253",
        "link": "https://leetcode.com/problems/patterns-problem-253/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 835,
        "striver": true,
        "tags": [
          "dfs",
          "bfs",
          "math"
        ],
        "description": "Solve Patterns Problem 253. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "bfs"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p070",
        "name": "Patterns Problem 70",
        "platform": "codeforces",
        "code": "CF1058C",
        "link": "https://codeforces.com/problemset/problem/1058/C",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 868,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Patterns Problem 70. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p516",
        "name": "Patterns Problem 516",
        "platform": "leetcode",
        "code": "LC516",
        "link": "https://leetcode.com/problems/patterns-problem-516/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 877,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Patterns Problem 516. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p610",
        "name": "Patterns Problem 610",
        "platform": "leetcode",
        "code": "LC610",
        "link": "https://leetcode.com/problems/patterns-problem-610/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 885,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Patterns Problem 610. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": []
      },
      {
        "id": "p673",
        "name": "Patterns Problem 673",
        "platform": "leetcode",
        "code": "LC673",
        "link": "https://leetcode.com/problems/patterns-problem-673/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 903,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Patterns Problem 673. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p142",
        "name": "Patterns Problem 142",
        "platform": "leetcode",
        "code": "LC142",
        "link": "https://leetcode.com/problems/patterns-problem-142/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 908,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Patterns Problem 142. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "apple",
          "adobe"
        ]
      },
      {
        "id": "p525",
        "name": "Patterns Problem 525",
        "platform": "codeforces",
        "code": "CF47E",
        "link": "https://codeforces.com/problemset/problem/47/E",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 909,
        "striver": false,
        "tags": [
          "bfs",
          "trees",
          "binary-search"
        ],
        "description": "Solve Patterns Problem 525. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p095",
        "name": "Patterns Problem 95",
        "platform": "codechef",
        "code": "CCPROB95",
        "link": "https://www.codechef.com/problems/CCPROB95",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 917,
        "striver": true,
        "tags": [
          "arrays",
          "queue",
          "stack"
        ],
        "description": "Solve Patterns Problem 95. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "queue"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p283",
        "name": "Patterns Problem 283",
        "platform": "leetcode",
        "code": "LC283",
        "link": "https://leetcode.com/problems/patterns-problem-283/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 928,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Patterns Problem 283. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "apple",
          "amazon"
        ]
      },
      {
        "id": "p384",
        "name": "Patterns Problem 384",
        "platform": "codechef",
        "code": "CCPROB384",
        "link": "https://www.codechef.com/problems/CCPROB384",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 966,
        "striver": true,
        "tags": [
          "hashmap",
          "queue",
          "stack"
        ],
        "description": "Solve Patterns Problem 384. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "queue"
        ],
        "companies": [
          "netflix",
          "adobe"
        ]
      },
      {
        "id": "p376",
        "name": "Patterns Problem 376",
        "platform": "leetcode",
        "code": "LC376",
        "link": "https://leetcode.com/problems/patterns-problem-376/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 997,
        "striver": true,
        "tags": [
          "arrays",
          "stack",
          "bit-manipulation"
        ],
        "description": "Solve Patterns Problem 376. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "stack"
        ],
        "companies": [
          "google",
          "netflix"
        ]
      },
      {
        "id": "p159",
        "name": "Patterns Problem 159",
        "platform": "codeforces",
        "code": "CF1250D",
        "link": "https://codeforces.com/problemset/problem/1250/D",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1000,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Patterns Problem 159. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "apple",
          "adobe"
        ]
      },
      {
        "id": "p601",
        "name": "Patterns Problem 601",
        "platform": "leetcode",
        "code": "LC601",
        "link": "https://leetcode.com/problems/patterns-problem-601/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1000,
        "striver": false,
        "tags": [
          "greedy",
          "dp"
        ],
        "description": "Solve Patterns Problem 601. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "dp"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p210",
        "name": "Patterns Problem 210",
        "platform": "leetcode",
        "code": "LC210",
        "link": "https://leetcode.com/problems/patterns-problem-210/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1037,
        "striver": true,
        "tags": [
          "greedy",
          "hashmap"
        ],
        "description": "Solve Patterns Problem 210. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "hashmap"
        ],
        "companies": [
          "netflix",
          "apple"
        ]
      },
      {
        "id": "p744",
        "name": "Patterns Problem 744",
        "platform": "leetcode",
        "code": "LC744",
        "link": "https://leetcode.com/problems/patterns-problem-744/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1049,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Patterns Problem 744. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p669",
        "name": "Patterns Problem 669",
        "platform": "codechef",
        "code": "CCPROB669",
        "link": "https://www.codechef.com/problems/CCPROB669",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1064,
        "striver": false,
        "tags": [
          "hashmap",
          "heap",
          "binary-search"
        ],
        "description": "Solve Patterns Problem 669. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "heap"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p529",
        "name": "Patterns Problem 529",
        "platform": "codechef",
        "code": "CCPROB529",
        "link": "https://www.codechef.com/problems/CCPROB529",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1076,
        "striver": false,
        "tags": [
          "stack",
          "math",
          "graphs"
        ],
        "description": "Solve Patterns Problem 529. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "math"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p655",
        "name": "Patterns Problem 655",
        "platform": "leetcode",
        "code": "LC655",
        "link": "https://leetcode.com/problems/patterns-problem-655/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1081,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Patterns Problem 655. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p725",
        "name": "Patterns Problem 725",
        "platform": "leetcode",
        "code": "LC725",
        "link": "https://leetcode.com/problems/patterns-problem-725/",
        "topic": "patterns",
        "difficulty": "easy",
        "rating": 1090,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Patterns Problem 725. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p511",
        "name": "Patterns Problem 511",
        "platform": "codeforces",
        "code": "CF1122A",
        "link": "https://codeforces.com/problemset/problem/1122/A",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1379,
        "striver": false,
        "tags": [
          "dp",
          "stack",
          "greedy"
        ],
        "description": "Solve Patterns Problem 511. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "stack"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p202",
        "name": "Patterns Problem 202",
        "platform": "codeforces",
        "code": "CF1798H",
        "link": "https://codeforces.com/problemset/problem/1798/H",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1432,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Patterns Problem 202. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p034",
        "name": "Patterns Problem 34",
        "platform": "codeforces",
        "code": "CF1775E",
        "link": "https://codeforces.com/problemset/problem/1775/E",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1443,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Patterns Problem 34. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p591",
        "name": "Patterns Problem 591",
        "platform": "codeforces",
        "code": "CF708C",
        "link": "https://codeforces.com/problemset/problem/708/C",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1445,
        "striver": false,
        "tags": [
          "dp",
          "hashmap",
          "stack"
        ],
        "description": "Solve Patterns Problem 591. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "hashmap"
        ],
        "companies": [
          "google",
          "microsoft"
        ]
      },
      {
        "id": "p280",
        "name": "Patterns Problem 280",
        "platform": "codechef",
        "code": "CCPROB280",
        "link": "https://www.codechef.com/problems/CCPROB280",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1466,
        "striver": true,
        "tags": [
          "queue",
          "dfs"
        ],
        "description": "Solve Patterns Problem 280. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "dfs"
        ],
        "companies": [
          "meta",
          "microsoft"
        ]
      },
      {
        "id": "p445",
        "name": "Patterns Problem 445",
        "platform": "leetcode",
        "code": "LC445",
        "link": "https://leetcode.com/problems/patterns-problem-445/",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1478,
        "striver": true,
        "tags": [
          "dfs",
          "math"
        ],
        "description": "Solve Patterns Problem 445. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "math"
        ],
        "companies": [
          "netflix",
          "amazon"
        ]
      },
      {
        "id": "p392",
        "name": "Patterns Problem 392",
        "platform": "codechef",
        "code": "CCPROB392",
        "link": "https://www.codechef.com/problems/CCPROB392",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1528,
        "striver": true,
        "tags": [
          "graphs",
          "binary-search",
          "heap"
        ],
        "description": "Solve Patterns Problem 392. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "binary-search"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p716",
        "name": "Patterns Problem 716",
        "platform": "leetcode",
        "code": "LC716",
        "link": "https://leetcode.com/problems/patterns-problem-716/",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1572,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Patterns Problem 716. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p735",
        "name": "Patterns Problem 735",
        "platform": "leetcode",
        "code": "LC735",
        "link": "https://leetcode.com/problems/patterns-problem-735/",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1581,
        "striver": false,
        "tags": [
          "bfs",
          "two-pointers",
          "hashmap"
        ],
        "description": "Solve Patterns Problem 735. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p008",
        "name": "Patterns Problem 8",
        "platform": "codeforces",
        "code": "CF1119C",
        "link": "https://codeforces.com/problemset/problem/1119/C",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1591,
        "striver": true,
        "tags": [
          "greedy",
          "arrays"
        ],
        "description": "Solve Patterns Problem 8. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "arrays"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p227",
        "name": "Patterns Problem 227",
        "platform": "codechef",
        "code": "CCPROB227",
        "link": "https://www.codechef.com/problems/CCPROB227",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1612,
        "striver": true,
        "tags": [
          "strings",
          "arrays",
          "bfs"
        ],
        "description": "Solve Patterns Problem 227. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "arrays"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p066",
        "name": "Patterns Problem 66",
        "platform": "leetcode",
        "code": "LC66",
        "link": "https://leetcode.com/problems/patterns-problem-66/",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1615,
        "striver": true,
        "tags": [
          "strings",
          "greedy"
        ],
        "description": "Solve Patterns Problem 66. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "greedy"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p597",
        "name": "Patterns Problem 597",
        "platform": "leetcode",
        "code": "LC597",
        "link": "https://leetcode.com/problems/patterns-problem-597/",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1692,
        "striver": false,
        "tags": [
          "graphs"
        ],
        "description": "Solve Patterns Problem 597. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p571",
        "name": "Patterns Problem 571",
        "platform": "leetcode",
        "code": "LC571",
        "link": "https://leetcode.com/problems/patterns-problem-571/",
        "topic": "patterns",
        "difficulty": "medium",
        "rating": 1693,
        "striver": false,
        "tags": [
          "dp",
          "binary-search"
        ],
        "description": "Solve Patterns Problem 571. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "binary-search"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p061",
        "name": "Patterns Problem 61",
        "platform": "codechef",
        "code": "CCPROB61",
        "link": "https://www.codechef.com/problems/CCPROB61",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 1803,
        "striver": true,
        "tags": [
          "dp",
          "trees"
        ],
        "description": "Solve Patterns Problem 61. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p492",
        "name": "Patterns Problem 492",
        "platform": "codeforces",
        "code": "CF1342G",
        "link": "https://codeforces.com/problemset/problem/1342/G",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 1820,
        "striver": false,
        "tags": [
          "arrays",
          "binary-search",
          "dfs"
        ],
        "description": "Solve Patterns Problem 492. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "binary-search"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p558",
        "name": "Patterns Problem 558",
        "platform": "leetcode",
        "code": "LC558",
        "link": "https://leetcode.com/problems/patterns-problem-558/",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 1833,
        "striver": false,
        "tags": [
          "math",
          "heap"
        ],
        "description": "Solve Patterns Problem 558. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p149",
        "name": "Patterns Problem 149",
        "platform": "leetcode",
        "code": "LC149",
        "link": "https://leetcode.com/problems/patterns-problem-149/",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 1961,
        "striver": true,
        "tags": [
          "dp",
          "stack"
        ],
        "description": "Solve Patterns Problem 149. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p146",
        "name": "Patterns Problem 146",
        "platform": "codeforces",
        "code": "CF1178G",
        "link": "https://codeforces.com/problemset/problem/1178/G",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 2094,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "greedy"
        ],
        "description": "Solve Patterns Problem 146. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p566",
        "name": "Patterns Problem 566",
        "platform": "codechef",
        "code": "CCPROB566",
        "link": "https://www.codechef.com/problems/CCPROB566",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 2161,
        "striver": false,
        "tags": [
          "heap",
          "hashmap",
          "strings"
        ],
        "description": "Solve Patterns Problem 566. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p583",
        "name": "Patterns Problem 583",
        "platform": "leetcode",
        "code": "LC583",
        "link": "https://leetcode.com/problems/patterns-problem-583/",
        "topic": "patterns",
        "difficulty": "hard",
        "rating": 2368,
        "striver": false,
        "tags": [
          "stack",
          "trees",
          "math"
        ],
        "description": "Solve Patterns Problem 583. Apply core patterns concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "trees"
        ],
        "companies": [
          "apple"
        ]
      }
    ]
  },
  {
    "id": "math",
    "name": "Basic Maths",
    "icon": "🔢",
    "color": "#ffd740",
    "problems": [
      {
        "id": "p738",
        "name": "Math Problem 738",
        "platform": "leetcode",
        "code": "LC738",
        "link": "https://leetcode.com/problems/math-problem-738/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 836,
        "striver": false,
        "tags": [
          "dp",
          "graphs",
          "bfs"
        ],
        "description": "Solve Math Problem 738. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p556",
        "name": "Math Problem 556",
        "platform": "leetcode",
        "code": "LC556",
        "link": "https://leetcode.com/problems/math-problem-556/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 846,
        "striver": false,
        "tags": [
          "dp"
        ],
        "description": "Solve Math Problem 556. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": [
          "google",
          "meta"
        ]
      },
      {
        "id": "p401",
        "name": "Math Problem 401",
        "platform": "leetcode",
        "code": "LC401",
        "link": "https://leetcode.com/problems/math-problem-401/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 854,
        "striver": true,
        "tags": [
          "binary-search",
          "bit-manipulation"
        ],
        "description": "Solve Math Problem 401. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p118",
        "name": "Math Problem 118",
        "platform": "codechef",
        "code": "CCPROB118",
        "link": "https://www.codechef.com/problems/CCPROB118",
        "topic": "math",
        "difficulty": "easy",
        "rating": 864,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Math Problem 118. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p035",
        "name": "Math Problem 35",
        "platform": "codeforces",
        "code": "CF919D",
        "link": "https://codeforces.com/problemset/problem/919/D",
        "topic": "math",
        "difficulty": "easy",
        "rating": 866,
        "striver": true,
        "tags": [
          "math"
        ],
        "description": "Solve Math Problem 35. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "netflix",
          "google"
        ]
      },
      {
        "id": "p017",
        "name": "Math Problem 17",
        "platform": "leetcode",
        "code": "LC17",
        "link": "https://leetcode.com/problems/math-problem-17/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 886,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Math Problem 17. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p733",
        "name": "Math Problem 733",
        "platform": "leetcode",
        "code": "LC733",
        "link": "https://leetcode.com/problems/math-problem-733/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 952,
        "striver": false,
        "tags": [
          "dp",
          "heap"
        ],
        "description": "Solve Math Problem 733. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p485",
        "name": "Math Problem 485",
        "platform": "leetcode",
        "code": "LC485",
        "link": "https://leetcode.com/problems/math-problem-485/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 962,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Math Problem 485. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p487",
        "name": "Math Problem 487",
        "platform": "leetcode",
        "code": "LC487",
        "link": "https://leetcode.com/problems/math-problem-487/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 977,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Math Problem 487. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": []
      },
      {
        "id": "p628",
        "name": "Math Problem 628",
        "platform": "leetcode",
        "code": "LC628",
        "link": "https://leetcode.com/problems/math-problem-628/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 1003,
        "striver": false,
        "tags": [
          "heap",
          "hashmap",
          "two-pointers"
        ],
        "description": "Solve Math Problem 628. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p656",
        "name": "Math Problem 656",
        "platform": "leetcode",
        "code": "LC656",
        "link": "https://leetcode.com/problems/math-problem-656/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 1021,
        "striver": false,
        "tags": [
          "math",
          "heap",
          "hashmap"
        ],
        "description": "Solve Math Problem 656. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p748",
        "name": "Math Problem 748",
        "platform": "leetcode",
        "code": "LC748",
        "link": "https://leetcode.com/problems/math-problem-748/",
        "topic": "math",
        "difficulty": "easy",
        "rating": 1030,
        "striver": false,
        "tags": [
          "arrays",
          "recursion",
          "dfs"
        ],
        "description": "Solve Math Problem 748. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "recursion"
        ],
        "companies": [
          "meta",
          "google"
        ]
      },
      {
        "id": "p493",
        "name": "Math Problem 493",
        "platform": "codeforces",
        "code": "CF1158A",
        "link": "https://codeforces.com/problemset/problem/1158/A",
        "topic": "math",
        "difficulty": "easy",
        "rating": 1075,
        "striver": false,
        "tags": [
          "dp"
        ],
        "description": "Solve Math Problem 493. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": [
          "meta",
          "google"
        ]
      },
      {
        "id": "p693",
        "name": "Math Problem 693",
        "platform": "codechef",
        "code": "CCPROB693",
        "link": "https://www.codechef.com/problems/CCPROB693",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1233,
        "striver": false,
        "tags": [
          "bfs"
        ],
        "description": "Solve Math Problem 693. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "adobe",
          "meta"
        ]
      },
      {
        "id": "p340",
        "name": "Math Problem 340",
        "platform": "leetcode",
        "code": "LC340",
        "link": "https://leetcode.com/problems/math-problem-340/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1310,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "dp",
          "greedy"
        ],
        "description": "Solve Math Problem 340. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p540",
        "name": "Math Problem 540",
        "platform": "leetcode",
        "code": "LC540",
        "link": "https://leetcode.com/problems/math-problem-540/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1314,
        "striver": false,
        "tags": [
          "trees",
          "strings",
          "greedy"
        ],
        "description": "Solve Math Problem 540. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p049",
        "name": "Math Problem 49",
        "platform": "codeforces",
        "code": "CF1489D",
        "link": "https://codeforces.com/problemset/problem/1489/D",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1331,
        "striver": true,
        "tags": [
          "arrays",
          "dp"
        ],
        "description": "Solve Math Problem 49. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p117",
        "name": "Math Problem 117",
        "platform": "leetcode",
        "code": "LC117",
        "link": "https://leetcode.com/problems/math-problem-117/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1342,
        "striver": true,
        "tags": [
          "heap",
          "queue"
        ],
        "description": "Solve Math Problem 117. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p223",
        "name": "Math Problem 223",
        "platform": "leetcode",
        "code": "LC223",
        "link": "https://leetcode.com/problems/math-problem-223/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1347,
        "striver": true,
        "tags": [
          "strings",
          "trees",
          "hashmap"
        ],
        "description": "Solve Math Problem 223. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "trees"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p664",
        "name": "Math Problem 664",
        "platform": "codeforces",
        "code": "CF1613A",
        "link": "https://codeforces.com/problemset/problem/1613/A",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1382,
        "striver": false,
        "tags": [
          "binary-search",
          "arrays"
        ],
        "description": "Solve Math Problem 664. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "arrays"
        ],
        "companies": []
      },
      {
        "id": "p368",
        "name": "Math Problem 368",
        "platform": "leetcode",
        "code": "LC368",
        "link": "https://leetcode.com/problems/math-problem-368/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1568,
        "striver": true,
        "tags": [
          "dfs",
          "trees"
        ],
        "description": "Solve Math Problem 368. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p029",
        "name": "Math Problem 29",
        "platform": "leetcode",
        "code": "LC29",
        "link": "https://leetcode.com/problems/math-problem-29/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1575,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Math Problem 29. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p364",
        "name": "Math Problem 364",
        "platform": "leetcode",
        "code": "LC364",
        "link": "https://leetcode.com/problems/math-problem-364/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1652,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "math"
        ],
        "description": "Solve Math Problem 364. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "math"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p158",
        "name": "Math Problem 158",
        "platform": "leetcode",
        "code": "LC158",
        "link": "https://leetcode.com/problems/math-problem-158/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1655,
        "striver": true,
        "tags": [
          "queue",
          "stack"
        ],
        "description": "Solve Math Problem 158. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "stack"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p302",
        "name": "Math Problem 302",
        "platform": "leetcode",
        "code": "LC302",
        "link": "https://leetcode.com/problems/math-problem-302/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1658,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Math Problem 302. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p038",
        "name": "Math Problem 38",
        "platform": "codeforces",
        "code": "CF1462G",
        "link": "https://codeforces.com/problemset/problem/1462/G",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1662,
        "striver": true,
        "tags": [
          "heap",
          "bit-manipulation",
          "hashmap"
        ],
        "description": "Solve Math Problem 38. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "bit-manipulation"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p617",
        "name": "Math Problem 617",
        "platform": "leetcode",
        "code": "LC617",
        "link": "https://leetcode.com/problems/math-problem-617/",
        "topic": "math",
        "difficulty": "medium",
        "rating": 1663,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Math Problem 617. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p197",
        "name": "Math Problem 197",
        "platform": "leetcode",
        "code": "LC197",
        "link": "https://leetcode.com/problems/math-problem-197/",
        "topic": "math",
        "difficulty": "hard",
        "rating": 1879,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Math Problem 197. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p014",
        "name": "Math Problem 14",
        "platform": "codechef",
        "code": "CCPROB14",
        "link": "https://www.codechef.com/problems/CCPROB14",
        "topic": "math",
        "difficulty": "hard",
        "rating": 1922,
        "striver": true,
        "tags": [
          "strings",
          "dp"
        ],
        "description": "Solve Math Problem 14. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p547",
        "name": "Math Problem 547",
        "platform": "codeforces",
        "code": "CF886B",
        "link": "https://codeforces.com/problemset/problem/886/B",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2006,
        "striver": false,
        "tags": [
          "greedy",
          "heap"
        ],
        "description": "Solve Math Problem 547. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "heap"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p077",
        "name": "Math Problem 77",
        "platform": "leetcode",
        "code": "LC77",
        "link": "https://leetcode.com/problems/math-problem-77/",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2113,
        "striver": true,
        "tags": [
          "math",
          "dp",
          "recursion"
        ],
        "description": "Solve Math Problem 77. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dp"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p291",
        "name": "Math Problem 291",
        "platform": "leetcode",
        "code": "LC291",
        "link": "https://leetcode.com/problems/math-problem-291/",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2217,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Math Problem 291. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p301",
        "name": "Math Problem 301",
        "platform": "leetcode",
        "code": "LC301",
        "link": "https://leetcode.com/problems/math-problem-301/",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2282,
        "striver": true,
        "tags": [
          "strings",
          "trees",
          "dp"
        ],
        "description": "Solve Math Problem 301. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "trees"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p005",
        "name": "Math Problem 5",
        "platform": "leetcode",
        "code": "LC5",
        "link": "https://leetcode.com/problems/math-problem-5/",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2293,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Math Problem 5. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p189",
        "name": "Math Problem 189",
        "platform": "leetcode",
        "code": "LC189",
        "link": "https://leetcode.com/problems/math-problem-189/",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2312,
        "striver": true,
        "tags": [
          "heap",
          "hashmap"
        ],
        "description": "Solve Math Problem 189. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p031",
        "name": "Math Problem 31",
        "platform": "codeforces",
        "code": "CF1816H",
        "link": "https://codeforces.com/problemset/problem/1816/H",
        "topic": "math",
        "difficulty": "hard",
        "rating": 2391,
        "striver": true,
        "tags": [
          "dfs",
          "stack",
          "two-pointers"
        ],
        "description": "Solve Math Problem 31. Apply core math concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "stack"
        ],
        "companies": [
          "apple"
        ]
      }
    ]
  },
  {
    "id": "recursion",
    "name": "Recursion",
    "icon": "🔁",
    "color": "#ff6e40",
    "problems": [
      {
        "id": "p290",
        "name": "Recursion Problem 290",
        "platform": "leetcode",
        "code": "LC290",
        "link": "https://leetcode.com/problems/recursion-problem-290/",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 809,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Recursion Problem 290. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "adobe",
          "google"
        ]
      },
      {
        "id": "p141",
        "name": "Recursion Problem 141",
        "platform": "leetcode",
        "code": "LC141",
        "link": "https://leetcode.com/problems/recursion-problem-141/",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 814,
        "striver": true,
        "tags": [
          "bfs",
          "queue",
          "graphs"
        ],
        "description": "Solve Recursion Problem 141. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "queue"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p201",
        "name": "Recursion Problem 201",
        "platform": "codechef",
        "code": "CCPROB201",
        "link": "https://www.codechef.com/problems/CCPROB201",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 831,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "stack",
          "two-pointers"
        ],
        "description": "Solve Recursion Problem 201. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "stack"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p514",
        "name": "Recursion Problem 514",
        "platform": "codeforces",
        "code": "CF1142A",
        "link": "https://codeforces.com/problemset/problem/1142/A",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 842,
        "striver": false,
        "tags": [
          "two-pointers",
          "dp",
          "strings"
        ],
        "description": "Solve Recursion Problem 514. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "dp"
        ],
        "companies": [
          "amazon",
          "adobe"
        ]
      },
      {
        "id": "p116",
        "name": "Recursion Problem 116",
        "platform": "leetcode",
        "code": "LC116",
        "link": "https://leetcode.com/problems/recursion-problem-116/",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 921,
        "striver": true,
        "tags": [
          "greedy",
          "graphs",
          "dfs"
        ],
        "description": "Solve Recursion Problem 116. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p367",
        "name": "Recursion Problem 367",
        "platform": "codechef",
        "code": "CCPROB367",
        "link": "https://www.codechef.com/problems/CCPROB367",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 952,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Recursion Problem 367. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p672",
        "name": "Recursion Problem 672",
        "platform": "codechef",
        "code": "CCPROB672",
        "link": "https://www.codechef.com/problems/CCPROB672",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 977,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Recursion Problem 672. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "amazon",
          "meta"
        ]
      },
      {
        "id": "p145",
        "name": "Recursion Problem 145",
        "platform": "codeforces",
        "code": "CF575B",
        "link": "https://codeforces.com/problemset/problem/575/B",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 1016,
        "striver": true,
        "tags": [
          "graphs",
          "hashmap"
        ],
        "description": "Solve Recursion Problem 145. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "hashmap"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p534",
        "name": "Recursion Problem 534",
        "platform": "codechef",
        "code": "CCPROB534",
        "link": "https://www.codechef.com/problems/CCPROB534",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 1031,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Recursion Problem 534. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p613",
        "name": "Recursion Problem 613",
        "platform": "codeforces",
        "code": "CF589C",
        "link": "https://codeforces.com/problemset/problem/589/C",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 1038,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Recursion Problem 613. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "apple",
          "meta"
        ]
      },
      {
        "id": "p060",
        "name": "Recursion Problem 60",
        "platform": "leetcode",
        "code": "LC60",
        "link": "https://leetcode.com/problems/recursion-problem-60/",
        "topic": "recursion",
        "difficulty": "easy",
        "rating": 1048,
        "striver": true,
        "tags": [
          "queue",
          "greedy",
          "recursion"
        ],
        "description": "Solve Recursion Problem 60. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "greedy"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p258",
        "name": "Recursion Problem 258",
        "platform": "codechef",
        "code": "CCPROB258",
        "link": "https://www.codechef.com/problems/CCPROB258",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1233,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Recursion Problem 258. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p326",
        "name": "Recursion Problem 326",
        "platform": "codeforces",
        "code": "CF699D",
        "link": "https://codeforces.com/problemset/problem/699/D",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1236,
        "striver": true,
        "tags": [
          "strings",
          "two-pointers",
          "arrays"
        ],
        "description": "Solve Recursion Problem 326. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "two-pointers"
        ],
        "companies": [
          "google",
          "amazon"
        ]
      },
      {
        "id": "p192",
        "name": "Recursion Problem 192",
        "platform": "leetcode",
        "code": "LC192",
        "link": "https://leetcode.com/problems/recursion-problem-192/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1275,
        "striver": true,
        "tags": [
          "graphs",
          "arrays"
        ],
        "description": "Solve Recursion Problem 192. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "arrays"
        ],
        "companies": [
          "microsoft",
          "google"
        ]
      },
      {
        "id": "p198",
        "name": "Recursion Problem 198",
        "platform": "leetcode",
        "code": "LC198",
        "link": "https://leetcode.com/problems/recursion-problem-198/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1297,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Recursion Problem 198. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p438",
        "name": "Recursion Problem 438",
        "platform": "leetcode",
        "code": "LC438",
        "link": "https://leetcode.com/problems/recursion-problem-438/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1300,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Recursion Problem 438. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p072",
        "name": "Recursion Problem 72",
        "platform": "leetcode",
        "code": "LC72",
        "link": "https://leetcode.com/problems/recursion-problem-72/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1380,
        "striver": true,
        "tags": [
          "arrays"
        ],
        "description": "Solve Recursion Problem 72. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p609",
        "name": "Recursion Problem 609",
        "platform": "leetcode",
        "code": "LC609",
        "link": "https://leetcode.com/problems/recursion-problem-609/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1491,
        "striver": false,
        "tags": [
          "queue",
          "bit-manipulation"
        ],
        "description": "Solve Recursion Problem 609. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "bit-manipulation"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p520",
        "name": "Recursion Problem 520",
        "platform": "leetcode",
        "code": "LC520",
        "link": "https://leetcode.com/problems/recursion-problem-520/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1492,
        "striver": false,
        "tags": [
          "binary-search",
          "recursion",
          "queue"
        ],
        "description": "Solve Recursion Problem 520. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p272",
        "name": "Recursion Problem 272",
        "platform": "codechef",
        "code": "CCPROB272",
        "link": "https://www.codechef.com/problems/CCPROB272",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1587,
        "striver": true,
        "tags": [
          "math"
        ],
        "description": "Solve Recursion Problem 272. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": []
      },
      {
        "id": "p630",
        "name": "Recursion Problem 630",
        "platform": "leetcode",
        "code": "LC630",
        "link": "https://leetcode.com/problems/recursion-problem-630/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1597,
        "striver": false,
        "tags": [
          "recursion"
        ],
        "description": "Solve Recursion Problem 630. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p343",
        "name": "Recursion Problem 343",
        "platform": "leetcode",
        "code": "LC343",
        "link": "https://leetcode.com/problems/recursion-problem-343/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1625,
        "striver": true,
        "tags": [
          "stack",
          "hashmap"
        ],
        "description": "Solve Recursion Problem 343. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "hashmap"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p124",
        "name": "Recursion Problem 124",
        "platform": "leetcode",
        "code": "LC124",
        "link": "https://leetcode.com/problems/recursion-problem-124/",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1682,
        "striver": true,
        "tags": [
          "bfs",
          "recursion",
          "arrays"
        ],
        "description": "Solve Recursion Problem 124. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p238",
        "name": "Recursion Problem 238",
        "platform": "codechef",
        "code": "CCPROB238",
        "link": "https://www.codechef.com/problems/CCPROB238",
        "topic": "recursion",
        "difficulty": "medium",
        "rating": 1700,
        "striver": true,
        "tags": [
          "arrays",
          "stack",
          "queue"
        ],
        "description": "Solve Recursion Problem 238. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "stack"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p231",
        "name": "Recursion Problem 231",
        "platform": "leetcode",
        "code": "LC231",
        "link": "https://leetcode.com/problems/recursion-problem-231/",
        "topic": "recursion",
        "difficulty": "hard",
        "rating": 1890,
        "striver": true,
        "tags": [
          "graphs",
          "bit-manipulation"
        ],
        "description": "Solve Recursion Problem 231. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "bit-manipulation"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p548",
        "name": "Recursion Problem 548",
        "platform": "codeforces",
        "code": "CF1356E",
        "link": "https://codeforces.com/problemset/problem/1356/E",
        "topic": "recursion",
        "difficulty": "hard",
        "rating": 1982,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "recursion",
          "dfs"
        ],
        "description": "Solve Recursion Problem 548. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p584",
        "name": "Recursion Problem 584",
        "platform": "leetcode",
        "code": "LC584",
        "link": "https://leetcode.com/problems/recursion-problem-584/",
        "topic": "recursion",
        "difficulty": "hard",
        "rating": 2118,
        "striver": false,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Recursion Problem 584. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p449",
        "name": "Recursion Problem 449",
        "platform": "leetcode",
        "code": "LC449",
        "link": "https://leetcode.com/problems/recursion-problem-449/",
        "topic": "recursion",
        "difficulty": "hard",
        "rating": 2195,
        "striver": true,
        "tags": [
          "arrays",
          "dp",
          "hashmap"
        ],
        "description": "Solve Recursion Problem 449. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "dp"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p322",
        "name": "Recursion Problem 322",
        "platform": "codeforces",
        "code": "CF1485C",
        "link": "https://codeforces.com/problemset/problem/1485/C",
        "topic": "recursion",
        "difficulty": "hard",
        "rating": 2196,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Recursion Problem 322. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p212",
        "name": "Recursion Problem 212",
        "platform": "leetcode",
        "code": "LC212",
        "link": "https://leetcode.com/problems/recursion-problem-212/",
        "topic": "recursion",
        "difficulty": "hard",
        "rating": 2328,
        "striver": true,
        "tags": [
          "hashmap",
          "math",
          "arrays"
        ],
        "description": "Solve Recursion Problem 212. Apply core recursion concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "math"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "hashing",
    "name": "Hashing",
    "icon": "#️⃣",
    "color": "#ffd740",
    "problems": [
      {
        "id": "p554",
        "name": "Hashing Problem 554",
        "platform": "codechef",
        "code": "CCPROB554",
        "link": "https://www.codechef.com/problems/CCPROB554",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 806,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Hashing Problem 554. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p285",
        "name": "Hashing Problem 285",
        "platform": "codeforces",
        "code": "CF1443D",
        "link": "https://codeforces.com/problemset/problem/1443/D",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 822,
        "striver": true,
        "tags": [
          "queue",
          "trees",
          "hashmap"
        ],
        "description": "Solve Hashing Problem 285. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "trees"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p721",
        "name": "Hashing Problem 721",
        "platform": "leetcode",
        "code": "LC721",
        "link": "https://leetcode.com/problems/hashing-problem-721/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 844,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Hashing Problem 721. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "meta",
          "microsoft"
        ]
      },
      {
        "id": "p241",
        "name": "Hashing Problem 241",
        "platform": "leetcode",
        "code": "LC241",
        "link": "https://leetcode.com/problems/hashing-problem-241/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 850,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Hashing Problem 241. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "amazon",
          "apple"
        ]
      },
      {
        "id": "p332",
        "name": "Hashing Problem 332",
        "platform": "leetcode",
        "code": "LC332",
        "link": "https://leetcode.com/problems/hashing-problem-332/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 855,
        "striver": true,
        "tags": [
          "math",
          "binary-search",
          "heap"
        ],
        "description": "Solve Hashing Problem 332. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "math",
          "binary-search"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p281",
        "name": "Hashing Problem 281",
        "platform": "codeforces",
        "code": "CF1223E",
        "link": "https://codeforces.com/problemset/problem/1223/E",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 856,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Hashing Problem 281. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "microsoft",
          "amazon"
        ]
      },
      {
        "id": "p265",
        "name": "Hashing Problem 265",
        "platform": "codeforces",
        "code": "CF1696F",
        "link": "https://codeforces.com/problemset/problem/1696/F",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 869,
        "striver": true,
        "tags": [
          "math",
          "graphs"
        ],
        "description": "Solve Hashing Problem 265. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "math",
          "graphs"
        ],
        "companies": [
          "google",
          "meta"
        ]
      },
      {
        "id": "p105",
        "name": "Hashing Problem 105",
        "platform": "leetcode",
        "code": "LC105",
        "link": "https://leetcode.com/problems/hashing-problem-105/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 871,
        "striver": true,
        "tags": [
          "hashmap",
          "greedy"
        ],
        "description": "Solve Hashing Problem 105. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "greedy"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p518",
        "name": "Hashing Problem 518",
        "platform": "codechef",
        "code": "CCPROB518",
        "link": "https://www.codechef.com/problems/CCPROB518",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 886,
        "striver": false,
        "tags": [
          "binary-search",
          "graphs",
          "greedy"
        ],
        "description": "Solve Hashing Problem 518. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "graphs"
        ],
        "companies": [
          "microsoft",
          "uber"
        ]
      },
      {
        "id": "p206",
        "name": "Hashing Problem 206",
        "platform": "leetcode",
        "code": "LC206",
        "link": "https://leetcode.com/problems/hashing-problem-206/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 890,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Hashing Problem 206. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p729",
        "name": "Hashing Problem 729",
        "platform": "leetcode",
        "code": "LC729",
        "link": "https://leetcode.com/problems/hashing-problem-729/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 890,
        "striver": false,
        "tags": [
          "dfs",
          "strings",
          "two-pointers"
        ],
        "description": "Solve Hashing Problem 729. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p446",
        "name": "Hashing Problem 446",
        "platform": "codeforces",
        "code": "CF472A",
        "link": "https://codeforces.com/problemset/problem/472/A",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 895,
        "striver": true,
        "tags": [
          "arrays",
          "bit-manipulation"
        ],
        "description": "Solve Hashing Problem 446. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "bit-manipulation"
        ],
        "companies": [
          "apple",
          "netflix"
        ]
      },
      {
        "id": "p703",
        "name": "Hashing Problem 703",
        "platform": "leetcode",
        "code": "LC703",
        "link": "https://leetcode.com/problems/hashing-problem-703/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 938,
        "striver": false,
        "tags": [
          "arrays"
        ],
        "description": "Solve Hashing Problem 703. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p233",
        "name": "Hashing Problem 233",
        "platform": "leetcode",
        "code": "LC233",
        "link": "https://leetcode.com/problems/hashing-problem-233/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 943,
        "striver": true,
        "tags": [
          "hashmap",
          "dfs"
        ],
        "description": "Solve Hashing Problem 233. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "dfs"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p030",
        "name": "Hashing Problem 30",
        "platform": "leetcode",
        "code": "LC30",
        "link": "https://leetcode.com/problems/hashing-problem-30/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 944,
        "striver": true,
        "tags": [
          "strings",
          "bit-manipulation",
          "binary-search"
        ],
        "description": "Solve Hashing Problem 30. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bit-manipulation"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p155",
        "name": "Hashing Problem 155",
        "platform": "leetcode",
        "code": "LC155",
        "link": "https://leetcode.com/problems/hashing-problem-155/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 962,
        "striver": true,
        "tags": [
          "bfs",
          "stack"
        ],
        "description": "Solve Hashing Problem 155. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "stack"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p646",
        "name": "Hashing Problem 646",
        "platform": "leetcode",
        "code": "LC646",
        "link": "https://leetcode.com/problems/hashing-problem-646/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 965,
        "striver": false,
        "tags": [
          "queue",
          "strings",
          "math"
        ],
        "description": "Solve Hashing Problem 646. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "strings"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p431",
        "name": "Hashing Problem 431",
        "platform": "leetcode",
        "code": "LC431",
        "link": "https://leetcode.com/problems/hashing-problem-431/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 996,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "dfs"
        ],
        "description": "Solve Hashing Problem 431. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p271",
        "name": "Hashing Problem 271",
        "platform": "codeforces",
        "code": "CF1770B",
        "link": "https://codeforces.com/problemset/problem/1770/B",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 1035,
        "striver": true,
        "tags": [
          "greedy",
          "trees",
          "dfs"
        ],
        "description": "Solve Hashing Problem 271. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "trees"
        ],
        "companies": [
          "google",
          "microsoft"
        ]
      },
      {
        "id": "p314",
        "name": "Hashing Problem 314",
        "platform": "leetcode",
        "code": "LC314",
        "link": "https://leetcode.com/problems/hashing-problem-314/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 1055,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Hashing Problem 314. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p631",
        "name": "Hashing Problem 631",
        "platform": "leetcode",
        "code": "LC631",
        "link": "https://leetcode.com/problems/hashing-problem-631/",
        "topic": "hashing",
        "difficulty": "easy",
        "rating": 1092,
        "striver": false,
        "tags": [
          "queue",
          "trees",
          "bit-manipulation"
        ],
        "description": "Solve Hashing Problem 631. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p312",
        "name": "Hashing Problem 312",
        "platform": "codeforces",
        "code": "CF900E",
        "link": "https://codeforces.com/problemset/problem/900/E",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1213,
        "striver": true,
        "tags": [
          "two-pointers",
          "stack",
          "hashmap"
        ],
        "description": "Solve Hashing Problem 312. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "stack"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p296",
        "name": "Hashing Problem 296",
        "platform": "leetcode",
        "code": "LC296",
        "link": "https://leetcode.com/problems/hashing-problem-296/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1277,
        "striver": true,
        "tags": [
          "heap",
          "greedy"
        ],
        "description": "Solve Hashing Problem 296. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p653",
        "name": "Hashing Problem 653",
        "platform": "codechef",
        "code": "CCPROB653",
        "link": "https://www.codechef.com/problems/CCPROB653",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1294,
        "striver": false,
        "tags": [
          "stack",
          "queue"
        ],
        "description": "Solve Hashing Problem 653. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p284",
        "name": "Hashing Problem 284",
        "platform": "codeforces",
        "code": "CF808D",
        "link": "https://codeforces.com/problemset/problem/808/D",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1297,
        "striver": true,
        "tags": [
          "trees",
          "graphs",
          "recursion"
        ],
        "description": "Solve Hashing Problem 284. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p132",
        "name": "Hashing Problem 132",
        "platform": "leetcode",
        "code": "LC132",
        "link": "https://leetcode.com/problems/hashing-problem-132/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1336,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Hashing Problem 132. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p588",
        "name": "Hashing Problem 588",
        "platform": "leetcode",
        "code": "LC588",
        "link": "https://leetcode.com/problems/hashing-problem-588/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1337,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Hashing Problem 588. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p577",
        "name": "Hashing Problem 577",
        "platform": "leetcode",
        "code": "LC577",
        "link": "https://leetcode.com/problems/hashing-problem-577/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1370,
        "striver": false,
        "tags": [
          "heap",
          "dp"
        ],
        "description": "Solve Hashing Problem 577. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "dp"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p179",
        "name": "Hashing Problem 179",
        "platform": "leetcode",
        "code": "LC179",
        "link": "https://leetcode.com/problems/hashing-problem-179/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1405,
        "striver": true,
        "tags": [
          "math",
          "stack",
          "dp"
        ],
        "description": "Solve Hashing Problem 179. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "math",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p160",
        "name": "Hashing Problem 160",
        "platform": "codechef",
        "code": "CCPROB160",
        "link": "https://www.codechef.com/problems/CCPROB160",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1414,
        "striver": true,
        "tags": [
          "bfs",
          "strings",
          "recursion"
        ],
        "description": "Solve Hashing Problem 160. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "strings"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p710",
        "name": "Hashing Problem 710",
        "platform": "leetcode",
        "code": "LC710",
        "link": "https://leetcode.com/problems/hashing-problem-710/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1423,
        "striver": false,
        "tags": [
          "dfs",
          "two-pointers"
        ],
        "description": "Solve Hashing Problem 710. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "two-pointers"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p125",
        "name": "Hashing Problem 125",
        "platform": "codechef",
        "code": "CCPROB125",
        "link": "https://www.codechef.com/problems/CCPROB125",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1433,
        "striver": true,
        "tags": [
          "queue",
          "strings"
        ],
        "description": "Solve Hashing Problem 125. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "strings"
        ],
        "companies": [
          "meta",
          "adobe"
        ]
      },
      {
        "id": "p121",
        "name": "Hashing Problem 121",
        "platform": "leetcode",
        "code": "LC121",
        "link": "https://leetcode.com/problems/hashing-problem-121/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1491,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Hashing Problem 121. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p612",
        "name": "Hashing Problem 612",
        "platform": "leetcode",
        "code": "LC612",
        "link": "https://leetcode.com/problems/hashing-problem-612/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1493,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Hashing Problem 612. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p196",
        "name": "Hashing Problem 196",
        "platform": "codechef",
        "code": "CCPROB196",
        "link": "https://www.codechef.com/problems/CCPROB196",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1496,
        "striver": true,
        "tags": [
          "hashmap",
          "recursion",
          "bit-manipulation"
        ],
        "description": "Solve Hashing Problem 196. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p448",
        "name": "Hashing Problem 448",
        "platform": "codeforces",
        "code": "CF198E",
        "link": "https://codeforces.com/problemset/problem/198/E",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1521,
        "striver": true,
        "tags": [
          "bfs",
          "dfs"
        ],
        "description": "Solve Hashing Problem 448. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p742",
        "name": "Hashing Problem 742",
        "platform": "leetcode",
        "code": "LC742",
        "link": "https://leetcode.com/problems/hashing-problem-742/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1523,
        "striver": false,
        "tags": [
          "binary-search",
          "recursion"
        ],
        "description": "Solve Hashing Problem 742. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p250",
        "name": "Hashing Problem 250",
        "platform": "leetcode",
        "code": "LC250",
        "link": "https://leetcode.com/problems/hashing-problem-250/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1534,
        "striver": true,
        "tags": [
          "math",
          "dfs"
        ],
        "description": "Solve Hashing Problem 250. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p616",
        "name": "Hashing Problem 616",
        "platform": "codeforces",
        "code": "CF407F",
        "link": "https://codeforces.com/problemset/problem/407/F",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1535,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Hashing Problem 616. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p521",
        "name": "Hashing Problem 521",
        "platform": "codeforces",
        "code": "CF1470D",
        "link": "https://codeforces.com/problemset/problem/1470/D",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1537,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Hashing Problem 521. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p115",
        "name": "Hashing Problem 115",
        "platform": "leetcode",
        "code": "LC115",
        "link": "https://leetcode.com/problems/hashing-problem-115/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1580,
        "striver": true,
        "tags": [
          "arrays",
          "dfs"
        ],
        "description": "Solve Hashing Problem 115. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "dfs"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p666",
        "name": "Hashing Problem 666",
        "platform": "leetcode",
        "code": "LC666",
        "link": "https://leetcode.com/problems/hashing-problem-666/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1584,
        "striver": false,
        "tags": [
          "bfs",
          "greedy",
          "stack"
        ],
        "description": "Solve Hashing Problem 666. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p451",
        "name": "Hashing Problem 451",
        "platform": "leetcode",
        "code": "LC451",
        "link": "https://leetcode.com/problems/hashing-problem-451/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1594,
        "striver": true,
        "tags": [
          "hashmap",
          "recursion",
          "stack"
        ],
        "description": "Solve Hashing Problem 451. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "recursion"
        ],
        "companies": [
          "microsoft",
          "amazon"
        ]
      },
      {
        "id": "p378",
        "name": "Hashing Problem 378",
        "platform": "leetcode",
        "code": "LC378",
        "link": "https://leetcode.com/problems/hashing-problem-378/",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1597,
        "striver": true,
        "tags": [
          "strings",
          "bfs"
        ],
        "description": "Solve Hashing Problem 378. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p472",
        "name": "Hashing Problem 472",
        "platform": "codechef",
        "code": "CCPROB472",
        "link": "https://www.codechef.com/problems/CCPROB472",
        "topic": "hashing",
        "difficulty": "medium",
        "rating": 1644,
        "striver": false,
        "tags": [
          "binary-search",
          "recursion",
          "heap"
        ],
        "description": "Solve Hashing Problem 472. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "recursion"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p331",
        "name": "Hashing Problem 331",
        "platform": "codeforces",
        "code": "CF1122B",
        "link": "https://codeforces.com/problemset/problem/1122/B",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 1908,
        "striver": true,
        "tags": [
          "dp"
        ],
        "description": "Solve Hashing Problem 331. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p339",
        "name": "Hashing Problem 339",
        "platform": "codechef",
        "code": "CCPROB339",
        "link": "https://www.codechef.com/problems/CCPROB339",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 2059,
        "striver": true,
        "tags": [
          "math"
        ],
        "description": "Solve Hashing Problem 339. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p507",
        "name": "Hashing Problem 507",
        "platform": "codeforces",
        "code": "CF368B",
        "link": "https://codeforces.com/problemset/problem/368/B",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 2150,
        "striver": false,
        "tags": [
          "trees",
          "binary-search",
          "two-pointers"
        ],
        "description": "Solve Hashing Problem 507. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "binary-search"
        ],
        "companies": [
          "apple",
          "microsoft"
        ]
      },
      {
        "id": "p057",
        "name": "Hashing Problem 57",
        "platform": "leetcode",
        "code": "LC57",
        "link": "https://leetcode.com/problems/hashing-problem-57/",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 2187,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Hashing Problem 57. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p443",
        "name": "Hashing Problem 443",
        "platform": "leetcode",
        "code": "LC443",
        "link": "https://leetcode.com/problems/hashing-problem-443/",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 2227,
        "striver": true,
        "tags": [
          "queue",
          "dfs",
          "strings"
        ],
        "description": "Solve Hashing Problem 443. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p229",
        "name": "Hashing Problem 229",
        "platform": "codeforces",
        "code": "CF686B",
        "link": "https://codeforces.com/problemset/problem/686/B",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 2348,
        "striver": true,
        "tags": [
          "strings",
          "queue",
          "two-pointers"
        ],
        "description": "Solve Hashing Problem 229. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "queue"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p080",
        "name": "Hashing Problem 80",
        "platform": "codeforces",
        "code": "CF1011D",
        "link": "https://codeforces.com/problemset/problem/1011/D",
        "topic": "hashing",
        "difficulty": "hard",
        "rating": 2387,
        "striver": true,
        "tags": [
          "dp"
        ],
        "description": "Solve Hashing Problem 80. Apply core hashing concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": [
          "uber"
        ]
      }
    ]
  },
  {
    "id": "sorting",
    "name": "Sorting Techniques",
    "icon": "📊",
    "color": "#80d8ff",
    "problems": [
      {
        "id": "p151",
        "name": "Sorting Problem 151",
        "platform": "leetcode",
        "code": "LC151",
        "link": "https://leetcode.com/problems/sorting-problem-151/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 803,
        "striver": true,
        "tags": [
          "strings",
          "hashmap"
        ],
        "description": "Solve Sorting Problem 151. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "hashmap"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p533",
        "name": "Sorting Problem 533",
        "platform": "codeforces",
        "code": "CF660H",
        "link": "https://codeforces.com/problemset/problem/660/H",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 812,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Sorting Problem 533. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "adobe",
          "google"
        ]
      },
      {
        "id": "p544",
        "name": "Sorting Problem 544",
        "platform": "leetcode",
        "code": "LC544",
        "link": "https://leetcode.com/problems/sorting-problem-544/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 860,
        "striver": false,
        "tags": [
          "heap",
          "binary-search"
        ],
        "description": "Solve Sorting Problem 544. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p603",
        "name": "Sorting Problem 603",
        "platform": "codeforces",
        "code": "CF1349H",
        "link": "https://codeforces.com/problemset/problem/1349/H",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 898,
        "striver": false,
        "tags": [
          "strings"
        ],
        "description": "Solve Sorting Problem 603. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p044",
        "name": "Sorting Problem 44",
        "platform": "codechef",
        "code": "CCPROB44",
        "link": "https://www.codechef.com/problems/CCPROB44",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 899,
        "striver": true,
        "tags": [
          "stack",
          "greedy"
        ],
        "description": "Solve Sorting Problem 44. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "greedy"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p351",
        "name": "Sorting Problem 351",
        "platform": "leetcode",
        "code": "LC351",
        "link": "https://leetcode.com/problems/sorting-problem-351/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 939,
        "striver": true,
        "tags": [
          "trees",
          "two-pointers"
        ],
        "description": "Solve Sorting Problem 351. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "two-pointers"
        ],
        "companies": [
          "apple",
          "amazon"
        ]
      },
      {
        "id": "p150",
        "name": "Sorting Problem 150",
        "platform": "leetcode",
        "code": "LC150",
        "link": "https://leetcode.com/problems/sorting-problem-150/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 945,
        "striver": true,
        "tags": [
          "trees",
          "dfs",
          "two-pointers"
        ],
        "description": "Solve Sorting Problem 150. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p349",
        "name": "Sorting Problem 349",
        "platform": "codeforces",
        "code": "CF1008E",
        "link": "https://codeforces.com/problemset/problem/1008/E",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 1015,
        "striver": true,
        "tags": [
          "heap",
          "binary-search",
          "dfs"
        ],
        "description": "Solve Sorting Problem 349. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p311",
        "name": "Sorting Problem 311",
        "platform": "leetcode",
        "code": "LC311",
        "link": "https://leetcode.com/problems/sorting-problem-311/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 1057,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Sorting Problem 311. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "uber",
          "adobe"
        ]
      },
      {
        "id": "p377",
        "name": "Sorting Problem 377",
        "platform": "codechef",
        "code": "CCPROB377",
        "link": "https://www.codechef.com/problems/CCPROB377",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 1060,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Sorting Problem 377. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p045",
        "name": "Sorting Problem 45",
        "platform": "leetcode",
        "code": "LC45",
        "link": "https://leetcode.com/problems/sorting-problem-45/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 1063,
        "striver": true,
        "tags": [
          "trees",
          "hashmap"
        ],
        "description": "Solve Sorting Problem 45. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p605",
        "name": "Sorting Problem 605",
        "platform": "leetcode",
        "code": "LC605",
        "link": "https://leetcode.com/problems/sorting-problem-605/",
        "topic": "sorting",
        "difficulty": "easy",
        "rating": 1078,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "strings",
          "two-pointers"
        ],
        "description": "Solve Sorting Problem 605. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p064",
        "name": "Sorting Problem 64",
        "platform": "leetcode",
        "code": "LC64",
        "link": "https://leetcode.com/problems/sorting-problem-64/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1205,
        "striver": true,
        "tags": [
          "hashmap",
          "recursion"
        ],
        "description": "Solve Sorting Problem 64. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "recursion"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p705",
        "name": "Sorting Problem 705",
        "platform": "leetcode",
        "code": "LC705",
        "link": "https://leetcode.com/problems/sorting-problem-705/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1210,
        "striver": false,
        "tags": [
          "dfs",
          "strings",
          "dp"
        ],
        "description": "Solve Sorting Problem 705. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p140",
        "name": "Sorting Problem 140",
        "platform": "codeforces",
        "code": "CF1720F",
        "link": "https://codeforces.com/problemset/problem/1720/F",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1220,
        "striver": true,
        "tags": [
          "dfs",
          "two-pointers"
        ],
        "description": "Solve Sorting Problem 140. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p324",
        "name": "Sorting Problem 324",
        "platform": "codeforces",
        "code": "CF267H",
        "link": "https://codeforces.com/problemset/problem/267/H",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1224,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Sorting Problem 324. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "meta",
          "uber"
        ]
      },
      {
        "id": "p684",
        "name": "Sorting Problem 684",
        "platform": "leetcode",
        "code": "LC684",
        "link": "https://leetcode.com/problems/sorting-problem-684/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1236,
        "striver": false,
        "tags": [
          "bfs",
          "queue",
          "recursion"
        ],
        "description": "Solve Sorting Problem 684. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "queue"
        ],
        "companies": [
          "netflix",
          "adobe"
        ]
      },
      {
        "id": "p046",
        "name": "Sorting Problem 46",
        "platform": "leetcode",
        "code": "LC46",
        "link": "https://leetcode.com/problems/sorting-problem-46/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1253,
        "striver": true,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Sorting Problem 46. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p266",
        "name": "Sorting Problem 266",
        "platform": "codechef",
        "code": "CCPROB266",
        "link": "https://www.codechef.com/problems/CCPROB266",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1349,
        "striver": true,
        "tags": [
          "queue",
          "hashmap",
          "dfs"
        ],
        "description": "Solve Sorting Problem 266. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p600",
        "name": "Sorting Problem 600",
        "platform": "leetcode",
        "code": "LC600",
        "link": "https://leetcode.com/problems/sorting-problem-600/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1390,
        "striver": false,
        "tags": [
          "trees",
          "dp"
        ],
        "description": "Solve Sorting Problem 600. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "dp"
        ],
        "companies": [
          "apple",
          "adobe"
        ]
      },
      {
        "id": "p700",
        "name": "Sorting Problem 700",
        "platform": "leetcode",
        "code": "LC700",
        "link": "https://leetcode.com/problems/sorting-problem-700/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1418,
        "striver": false,
        "tags": [
          "trees",
          "bfs"
        ],
        "description": "Solve Sorting Problem 700. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "bfs"
        ],
        "companies": [
          "apple",
          "microsoft"
        ]
      },
      {
        "id": "p010",
        "name": "Sorting Problem 10",
        "platform": "leetcode",
        "code": "LC10",
        "link": "https://leetcode.com/problems/sorting-problem-10/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1473,
        "striver": true,
        "tags": [
          "arrays",
          "strings"
        ],
        "description": "Solve Sorting Problem 10. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "strings"
        ],
        "companies": [
          "microsoft",
          "netflix"
        ]
      },
      {
        "id": "p232",
        "name": "Sorting Problem 232",
        "platform": "leetcode",
        "code": "LC232",
        "link": "https://leetcode.com/problems/sorting-problem-232/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1488,
        "striver": true,
        "tags": [
          "recursion",
          "heap"
        ],
        "description": "Solve Sorting Problem 232. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p573",
        "name": "Sorting Problem 573",
        "platform": "leetcode",
        "code": "LC573",
        "link": "https://leetcode.com/problems/sorting-problem-573/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1492,
        "striver": false,
        "tags": [
          "greedy"
        ],
        "description": "Solve Sorting Problem 573. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p585",
        "name": "Sorting Problem 585",
        "platform": "leetcode",
        "code": "LC585",
        "link": "https://leetcode.com/problems/sorting-problem-585/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1516,
        "striver": false,
        "tags": [
          "dfs",
          "recursion"
        ],
        "description": "Solve Sorting Problem 585. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "recursion"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p336",
        "name": "Sorting Problem 336",
        "platform": "leetcode",
        "code": "LC336",
        "link": "https://leetcode.com/problems/sorting-problem-336/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1519,
        "striver": true,
        "tags": [
          "two-pointers",
          "dfs",
          "strings"
        ],
        "description": "Solve Sorting Problem 336. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "dfs"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p607",
        "name": "Sorting Problem 607",
        "platform": "codeforces",
        "code": "CF620C",
        "link": "https://codeforces.com/problemset/problem/620/C",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1538,
        "striver": false,
        "tags": [
          "dfs",
          "bfs",
          "binary-search"
        ],
        "description": "Solve Sorting Problem 607. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "bfs"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p688",
        "name": "Sorting Problem 688",
        "platform": "codeforces",
        "code": "CF1144C",
        "link": "https://codeforces.com/problemset/problem/1144/C",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1617,
        "striver": false,
        "tags": [
          "strings",
          "graphs"
        ],
        "description": "Solve Sorting Problem 688. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p468",
        "name": "Sorting Problem 468",
        "platform": "leetcode",
        "code": "LC468",
        "link": "https://leetcode.com/problems/sorting-problem-468/",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1638,
        "striver": false,
        "tags": [
          "two-pointers",
          "dfs",
          "strings"
        ],
        "description": "Solve Sorting Problem 468. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "dfs"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p452",
        "name": "Sorting Problem 452",
        "platform": "codeforces",
        "code": "CF468B",
        "link": "https://codeforces.com/problemset/problem/468/B",
        "topic": "sorting",
        "difficulty": "medium",
        "rating": 1681,
        "striver": true,
        "tags": [
          "hashmap",
          "bit-manipulation",
          "math"
        ],
        "description": "Solve Sorting Problem 452. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p383",
        "name": "Sorting Problem 383",
        "platform": "leetcode",
        "code": "LC383",
        "link": "https://leetcode.com/problems/sorting-problem-383/",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 1830,
        "striver": true,
        "tags": [
          "hashmap",
          "stack",
          "trees"
        ],
        "description": "Solve Sorting Problem 383. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p147",
        "name": "Sorting Problem 147",
        "platform": "codechef",
        "code": "CCPROB147",
        "link": "https://www.codechef.com/problems/CCPROB147",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 1922,
        "striver": true,
        "tags": [
          "dp",
          "queue",
          "binary-search"
        ],
        "description": "Solve Sorting Problem 147. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p436",
        "name": "Sorting Problem 436",
        "platform": "leetcode",
        "code": "LC436",
        "link": "https://leetcode.com/problems/sorting-problem-436/",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 2004,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "greedy",
          "trees"
        ],
        "description": "Solve Sorting Problem 436. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p687",
        "name": "Sorting Problem 687",
        "platform": "leetcode",
        "code": "LC687",
        "link": "https://leetcode.com/problems/sorting-problem-687/",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 2136,
        "striver": false,
        "tags": [
          "arrays",
          "graphs",
          "bit-manipulation"
        ],
        "description": "Solve Sorting Problem 687. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "graphs"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p499",
        "name": "Sorting Problem 499",
        "platform": "leetcode",
        "code": "LC499",
        "link": "https://leetcode.com/problems/sorting-problem-499/",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 2232,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Sorting Problem 499. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p166",
        "name": "Sorting Problem 166",
        "platform": "codeforces",
        "code": "CF1614A",
        "link": "https://codeforces.com/problemset/problem/1614/A",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 2242,
        "striver": true,
        "tags": [
          "math"
        ],
        "description": "Solve Sorting Problem 166. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "netflix",
          "amazon"
        ]
      },
      {
        "id": "p470",
        "name": "Sorting Problem 470",
        "platform": "leetcode",
        "code": "LC470",
        "link": "https://leetcode.com/problems/sorting-problem-470/",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 2312,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Sorting Problem 470. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p731",
        "name": "Sorting Problem 731",
        "platform": "leetcode",
        "code": "LC731",
        "link": "https://leetcode.com/problems/sorting-problem-731/",
        "topic": "sorting",
        "difficulty": "hard",
        "rating": 2351,
        "striver": false,
        "tags": [
          "queue",
          "hashmap"
        ],
        "description": "Solve Sorting Problem 731. Apply core sorting concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "hashmap"
        ],
        "companies": [
          "apple"
        ]
      }
    ]
  },
  {
    "id": "arrays",
    "name": "Arrays",
    "icon": "📦",
    "color": "#b9f6ca",
    "problems": [
      {
        "id": "p171",
        "name": "Arrays Problem 171",
        "platform": "leetcode",
        "code": "LC171",
        "link": "https://leetcode.com/problems/arrays-problem-171/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 842,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Arrays Problem 171. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "amazon",
          "apple"
        ]
      },
      {
        "id": "p608",
        "name": "Arrays Problem 608",
        "platform": "leetcode",
        "code": "LC608",
        "link": "https://leetcode.com/problems/arrays-problem-608/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 855,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Arrays Problem 608. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "meta",
          "netflix"
        ]
      },
      {
        "id": "p578",
        "name": "Arrays Problem 578",
        "platform": "leetcode",
        "code": "LC578",
        "link": "https://leetcode.com/problems/arrays-problem-578/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 865,
        "striver": false,
        "tags": [
          "heap",
          "arrays",
          "queue"
        ],
        "description": "Solve Arrays Problem 578. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "arrays"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p122",
        "name": "Arrays Problem 122",
        "platform": "leetcode",
        "code": "LC122",
        "link": "https://leetcode.com/problems/arrays-problem-122/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 885,
        "striver": true,
        "tags": [
          "recursion",
          "heap"
        ],
        "description": "Solve Arrays Problem 122. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "heap"
        ],
        "companies": [
          "google",
          "adobe"
        ]
      },
      {
        "id": "p164",
        "name": "Arrays Problem 164",
        "platform": "leetcode",
        "code": "LC164",
        "link": "https://leetcode.com/problems/arrays-problem-164/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 894,
        "striver": true,
        "tags": [
          "recursion",
          "queue"
        ],
        "description": "Solve Arrays Problem 164. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p661",
        "name": "Arrays Problem 661",
        "platform": "leetcode",
        "code": "LC661",
        "link": "https://leetcode.com/problems/arrays-problem-661/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 897,
        "striver": false,
        "tags": [
          "heap",
          "dp"
        ],
        "description": "Solve Arrays Problem 661. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "dp"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p439",
        "name": "Arrays Problem 439",
        "platform": "codeforces",
        "code": "CF783H",
        "link": "https://codeforces.com/problemset/problem/783/H",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 915,
        "striver": true,
        "tags": [
          "math",
          "dp",
          "heap"
        ],
        "description": "Solve Arrays Problem 439. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dp"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      },
      {
        "id": "p264",
        "name": "Arrays Problem 264",
        "platform": "codechef",
        "code": "CCPROB264",
        "link": "https://www.codechef.com/problems/CCPROB264",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 954,
        "striver": true,
        "tags": [
          "hashmap",
          "graphs"
        ],
        "description": "Solve Arrays Problem 264. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "graphs"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p598",
        "name": "Arrays Problem 598",
        "platform": "leetcode",
        "code": "LC598",
        "link": "https://leetcode.com/problems/arrays-problem-598/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 969,
        "striver": false,
        "tags": [
          "heap",
          "binary-search",
          "strings"
        ],
        "description": "Solve Arrays Problem 598. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "binary-search"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p415",
        "name": "Arrays Problem 415",
        "platform": "leetcode",
        "code": "LC415",
        "link": "https://leetcode.com/problems/arrays-problem-415/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 971,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Arrays Problem 415. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p618",
        "name": "Arrays Problem 618",
        "platform": "leetcode",
        "code": "LC618",
        "link": "https://leetcode.com/problems/arrays-problem-618/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 1008,
        "striver": false,
        "tags": [
          "trees",
          "stack"
        ],
        "description": "Solve Arrays Problem 618. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "stack"
        ],
        "companies": [
          "netflix",
          "apple"
        ]
      },
      {
        "id": "p432",
        "name": "Arrays Problem 432",
        "platform": "leetcode",
        "code": "LC432",
        "link": "https://leetcode.com/problems/arrays-problem-432/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 1058,
        "striver": true,
        "tags": [
          "greedy",
          "bit-manipulation"
        ],
        "description": "Solve Arrays Problem 432. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "bit-manipulation"
        ],
        "companies": [
          "google",
          "apple"
        ]
      },
      {
        "id": "p649",
        "name": "Arrays Problem 649",
        "platform": "leetcode",
        "code": "LC649",
        "link": "https://leetcode.com/problems/arrays-problem-649/",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 1065,
        "striver": false,
        "tags": [
          "recursion",
          "trees",
          "dfs"
        ],
        "description": "Solve Arrays Problem 649. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "trees"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p278",
        "name": "Arrays Problem 278",
        "platform": "codeforces",
        "code": "CF853E",
        "link": "https://codeforces.com/problemset/problem/853/E",
        "topic": "arrays",
        "difficulty": "easy",
        "rating": 1070,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Arrays Problem 278. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p599",
        "name": "Arrays Problem 599",
        "platform": "leetcode",
        "code": "LC599",
        "link": "https://leetcode.com/problems/arrays-problem-599/",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1207,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "dp",
          "trees"
        ],
        "description": "Solve Arrays Problem 599. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p162",
        "name": "Arrays Problem 162",
        "platform": "leetcode",
        "code": "LC162",
        "link": "https://leetcode.com/problems/arrays-problem-162/",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1224,
        "striver": true,
        "tags": [
          "graphs",
          "math",
          "hashmap"
        ],
        "description": "Solve Arrays Problem 162. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "math"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p167",
        "name": "Arrays Problem 167",
        "platform": "leetcode",
        "code": "LC167",
        "link": "https://leetcode.com/problems/arrays-problem-167/",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1334,
        "striver": true,
        "tags": [
          "two-pointers",
          "strings"
        ],
        "description": "Solve Arrays Problem 167. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "strings"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p517",
        "name": "Arrays Problem 517",
        "platform": "codechef",
        "code": "CCPROB517",
        "link": "https://www.codechef.com/problems/CCPROB517",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1411,
        "striver": false,
        "tags": [
          "graphs",
          "dfs"
        ],
        "description": "Solve Arrays Problem 517. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "dfs"
        ],
        "companies": [
          "adobe",
          "uber"
        ]
      },
      {
        "id": "p629",
        "name": "Arrays Problem 629",
        "platform": "leetcode",
        "code": "LC629",
        "link": "https://leetcode.com/problems/arrays-problem-629/",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1462,
        "striver": false,
        "tags": [
          "greedy",
          "math"
        ],
        "description": "Solve Arrays Problem 629. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "math"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p706",
        "name": "Arrays Problem 706",
        "platform": "leetcode",
        "code": "LC706",
        "link": "https://leetcode.com/problems/arrays-problem-706/",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1466,
        "striver": false,
        "tags": [
          "arrays",
          "queue"
        ],
        "description": "Solve Arrays Problem 706. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p622",
        "name": "Arrays Problem 622",
        "platform": "codeforces",
        "code": "CF404B",
        "link": "https://codeforces.com/problemset/problem/404/B",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1534,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Arrays Problem 622. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p120",
        "name": "Arrays Problem 120",
        "platform": "leetcode",
        "code": "LC120",
        "link": "https://leetcode.com/problems/arrays-problem-120/",
        "topic": "arrays",
        "difficulty": "medium",
        "rating": 1696,
        "striver": true,
        "tags": [
          "dfs",
          "bfs",
          "binary-search"
        ],
        "description": "Solve Arrays Problem 120. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "bfs"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p091",
        "name": "Arrays Problem 91",
        "platform": "codechef",
        "code": "CCPROB91",
        "link": "https://www.codechef.com/problems/CCPROB91",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2120,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Arrays Problem 91. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p329",
        "name": "Arrays Problem 329",
        "platform": "leetcode",
        "code": "LC329",
        "link": "https://leetcode.com/problems/arrays-problem-329/",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2125,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Arrays Problem 329. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p297",
        "name": "Arrays Problem 297",
        "platform": "leetcode",
        "code": "LC297",
        "link": "https://leetcode.com/problems/arrays-problem-297/",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2147,
        "striver": true,
        "tags": [
          "binary-search",
          "dfs"
        ],
        "description": "Solve Arrays Problem 297. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "dfs"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p419",
        "name": "Arrays Problem 419",
        "platform": "leetcode",
        "code": "LC419",
        "link": "https://leetcode.com/problems/arrays-problem-419/",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2194,
        "striver": true,
        "tags": [
          "greedy",
          "bfs",
          "strings"
        ],
        "description": "Solve Arrays Problem 419. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p691",
        "name": "Arrays Problem 691",
        "platform": "leetcode",
        "code": "LC691",
        "link": "https://leetcode.com/problems/arrays-problem-691/",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2212,
        "striver": false,
        "tags": [
          "arrays",
          "stack",
          "bfs"
        ],
        "description": "Solve Arrays Problem 691. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "stack"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p469",
        "name": "Arrays Problem 469",
        "platform": "codeforces",
        "code": "CF700F",
        "link": "https://codeforces.com/problemset/problem/700/F",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2282,
        "striver": false,
        "tags": [
          "arrays",
          "dp"
        ],
        "description": "Solve Arrays Problem 469. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "dp"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p205",
        "name": "Arrays Problem 205",
        "platform": "leetcode",
        "code": "LC205",
        "link": "https://leetcode.com/problems/arrays-problem-205/",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2296,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Arrays Problem 205. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p248",
        "name": "Arrays Problem 248",
        "platform": "codeforces",
        "code": "CF583F",
        "link": "https://codeforces.com/problemset/problem/583/F",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2319,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Arrays Problem 248. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p394",
        "name": "Arrays Problem 394",
        "platform": "codeforces",
        "code": "CF387D",
        "link": "https://codeforces.com/problemset/problem/387/D",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2357,
        "striver": true,
        "tags": [
          "stack",
          "greedy"
        ],
        "description": "Solve Arrays Problem 394. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "greedy"
        ],
        "companies": [
          "meta",
          "adobe"
        ]
      },
      {
        "id": "p298",
        "name": "Arrays Problem 298",
        "platform": "leetcode",
        "code": "LC298",
        "link": "https://leetcode.com/problems/arrays-problem-298/",
        "topic": "arrays",
        "difficulty": "hard",
        "rating": 2391,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Arrays Problem 298. Apply core arrays concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      }
    ]
  },
  {
    "id": "binary-search",
    "name": "Binary Search",
    "icon": "🔍",
    "color": "#ffff8d",
    "problems": [
      {
        "id": "p335",
        "name": "Binary-Search Problem 335",
        "platform": "leetcode",
        "code": "LC335",
        "link": "https://leetcode.com/problems/binary-search-problem-335/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 815,
        "striver": true,
        "tags": [
          "queue",
          "hashmap",
          "math"
        ],
        "description": "Solve Binary-Search Problem 335. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "hashmap"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p345",
        "name": "Binary-Search Problem 345",
        "platform": "codeforces",
        "code": "CF1899E",
        "link": "https://codeforces.com/problemset/problem/1899/E",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 817,
        "striver": true,
        "tags": [
          "greedy",
          "two-pointers"
        ],
        "description": "Solve Binary-Search Problem 345. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "two-pointers"
        ],
        "companies": [
          "amazon",
          "adobe"
        ]
      },
      {
        "id": "p726",
        "name": "Binary-Search Problem 726",
        "platform": "leetcode",
        "code": "LC726",
        "link": "https://leetcode.com/problems/binary-search-problem-726/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 840,
        "striver": false,
        "tags": [
          "strings",
          "bfs",
          "greedy"
        ],
        "description": "Solve Binary-Search Problem 726. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p459",
        "name": "Binary-Search Problem 459",
        "platform": "codeforces",
        "code": "CF697A",
        "link": "https://codeforces.com/problemset/problem/697/A",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 843,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Binary-Search Problem 459. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p619",
        "name": "Binary-Search Problem 619",
        "platform": "leetcode",
        "code": "LC619",
        "link": "https://leetcode.com/problems/binary-search-problem-619/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 878,
        "striver": false,
        "tags": [
          "strings",
          "stack"
        ],
        "description": "Solve Binary-Search Problem 619. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "stack"
        ],
        "companies": [
          "meta",
          "microsoft"
        ]
      },
      {
        "id": "p067",
        "name": "Binary-Search Problem 67",
        "platform": "codeforces",
        "code": "CF1858F",
        "link": "https://codeforces.com/problemset/problem/1858/F",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 939,
        "striver": true,
        "tags": [
          "bfs",
          "trees"
        ],
        "description": "Solve Binary-Search Problem 67. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p477",
        "name": "Binary-Search Problem 477",
        "platform": "leetcode",
        "code": "LC477",
        "link": "https://leetcode.com/problems/binary-search-problem-477/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 941,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Binary-Search Problem 477. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p606",
        "name": "Binary-Search Problem 606",
        "platform": "codeforces",
        "code": "CF1566E",
        "link": "https://codeforces.com/problemset/problem/1566/E",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 995,
        "striver": false,
        "tags": [
          "dfs",
          "graphs",
          "arrays"
        ],
        "description": "Solve Binary-Search Problem 606. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p455",
        "name": "Binary-Search Problem 455",
        "platform": "leetcode",
        "code": "LC455",
        "link": "https://leetcode.com/problems/binary-search-problem-455/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1018,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Binary-Search Problem 455. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p193",
        "name": "Binary-Search Problem 193",
        "platform": "codechef",
        "code": "CCPROB193",
        "link": "https://www.codechef.com/problems/CCPROB193",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1027,
        "striver": true,
        "tags": [
          "queue",
          "recursion"
        ],
        "description": "Solve Binary-Search Problem 193. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "recursion"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p112",
        "name": "Binary-Search Problem 112",
        "platform": "leetcode",
        "code": "LC112",
        "link": "https://leetcode.com/problems/binary-search-problem-112/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1039,
        "striver": true,
        "tags": [
          "arrays",
          "queue"
        ],
        "description": "Solve Binary-Search Problem 112. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "queue"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p581",
        "name": "Binary-Search Problem 581",
        "platform": "leetcode",
        "code": "LC581",
        "link": "https://leetcode.com/problems/binary-search-problem-581/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1046,
        "striver": false,
        "tags": [
          "binary-search",
          "dfs",
          "bfs"
        ],
        "description": "Solve Binary-Search Problem 581. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "dfs"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p157",
        "name": "Binary-Search Problem 157",
        "platform": "codeforces",
        "code": "CF776G",
        "link": "https://codeforces.com/problemset/problem/776/G",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1060,
        "striver": true,
        "tags": [
          "hashmap",
          "bfs"
        ],
        "description": "Solve Binary-Search Problem 157. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p026",
        "name": "Binary-Search Problem 26",
        "platform": "leetcode",
        "code": "LC26",
        "link": "https://leetcode.com/problems/binary-search-problem-26/",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1071,
        "striver": true,
        "tags": [
          "arrays",
          "trees"
        ],
        "description": "Solve Binary-Search Problem 26. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p696",
        "name": "Binary-Search Problem 696",
        "platform": "codeforces",
        "code": "CF1107A",
        "link": "https://codeforces.com/problemset/problem/1107/A",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1084,
        "striver": false,
        "tags": [
          "stack",
          "graphs",
          "hashmap"
        ],
        "description": "Solve Binary-Search Problem 696. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "graphs"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p589",
        "name": "Binary-Search Problem 589",
        "platform": "codechef",
        "code": "CCPROB589",
        "link": "https://www.codechef.com/problems/CCPROB589",
        "topic": "binary-search",
        "difficulty": "easy",
        "rating": 1086,
        "striver": false,
        "tags": [
          "trees",
          "dp"
        ],
        "description": "Solve Binary-Search Problem 589. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "dp"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p181",
        "name": "Binary-Search Problem 181",
        "platform": "leetcode",
        "code": "LC181",
        "link": "https://leetcode.com/problems/binary-search-problem-181/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1268,
        "striver": true,
        "tags": [
          "recursion",
          "heap",
          "binary-search"
        ],
        "description": "Solve Binary-Search Problem 181. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "heap"
        ],
        "companies": [
          "apple",
          "netflix"
        ]
      },
      {
        "id": "p370",
        "name": "Binary-Search Problem 370",
        "platform": "leetcode",
        "code": "LC370",
        "link": "https://leetcode.com/problems/binary-search-problem-370/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1287,
        "striver": true,
        "tags": [
          "bfs",
          "greedy",
          "bit-manipulation"
        ],
        "description": "Solve Binary-Search Problem 370. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "greedy"
        ],
        "companies": [
          "uber",
          "adobe"
        ]
      },
      {
        "id": "p286",
        "name": "Binary-Search Problem 286",
        "platform": "leetcode",
        "code": "LC286",
        "link": "https://leetcode.com/problems/binary-search-problem-286/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1310,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Binary-Search Problem 286. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "google",
          "amazon"
        ]
      },
      {
        "id": "p074",
        "name": "Binary-Search Problem 74",
        "platform": "codeforces",
        "code": "CF1834G",
        "link": "https://codeforces.com/problemset/problem/1834/G",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1331,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Binary-Search Problem 74. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p217",
        "name": "Binary-Search Problem 217",
        "platform": "codechef",
        "code": "CCPROB217",
        "link": "https://www.codechef.com/problems/CCPROB217",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1339,
        "striver": true,
        "tags": [
          "greedy",
          "math"
        ],
        "description": "Solve Binary-Search Problem 217. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p175",
        "name": "Binary-Search Problem 175",
        "platform": "codeforces",
        "code": "CF61H",
        "link": "https://codeforces.com/problemset/problem/61/H",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1386,
        "striver": true,
        "tags": [
          "graphs",
          "greedy",
          "binary-search"
        ],
        "description": "Solve Binary-Search Problem 175. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p203",
        "name": "Binary-Search Problem 203",
        "platform": "codechef",
        "code": "CCPROB203",
        "link": "https://www.codechef.com/problems/CCPROB203",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1425,
        "striver": true,
        "tags": [
          "bfs",
          "strings"
        ],
        "description": "Solve Binary-Search Problem 203. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p747",
        "name": "Binary-Search Problem 747",
        "platform": "codeforces",
        "code": "CF1716B",
        "link": "https://codeforces.com/problemset/problem/1716/B",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1468,
        "striver": false,
        "tags": [
          "queue",
          "two-pointers",
          "bit-manipulation"
        ],
        "description": "Solve Binary-Search Problem 747. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "two-pointers"
        ],
        "companies": [
          "adobe",
          "netflix"
        ]
      },
      {
        "id": "p425",
        "name": "Binary-Search Problem 425",
        "platform": "codechef",
        "code": "CCPROB425",
        "link": "https://www.codechef.com/problems/CCPROB425",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1474,
        "striver": true,
        "tags": [
          "stack",
          "arrays"
        ],
        "description": "Solve Binary-Search Problem 425. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "arrays"
        ],
        "companies": [
          "google",
          "adobe"
        ]
      },
      {
        "id": "p625",
        "name": "Binary-Search Problem 625",
        "platform": "leetcode",
        "code": "LC625",
        "link": "https://leetcode.com/problems/binary-search-problem-625/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1506,
        "striver": false,
        "tags": [
          "stack",
          "recursion",
          "arrays"
        ],
        "description": "Solve Binary-Search Problem 625. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p650",
        "name": "Binary-Search Problem 650",
        "platform": "leetcode",
        "code": "LC650",
        "link": "https://leetcode.com/problems/binary-search-problem-650/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1506,
        "striver": false,
        "tags": [
          "recursion",
          "dp",
          "strings"
        ],
        "description": "Solve Binary-Search Problem 650. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "dp"
        ],
        "companies": [
          "microsoft",
          "amazon"
        ]
      },
      {
        "id": "p109",
        "name": "Binary-Search Problem 109",
        "platform": "leetcode",
        "code": "LC109",
        "link": "https://leetcode.com/problems/binary-search-problem-109/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1577,
        "striver": true,
        "tags": [
          "trees",
          "greedy"
        ],
        "description": "Solve Binary-Search Problem 109. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "greedy"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p536",
        "name": "Binary-Search Problem 536",
        "platform": "leetcode",
        "code": "LC536",
        "link": "https://leetcode.com/problems/binary-search-problem-536/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1613,
        "striver": false,
        "tags": [
          "queue",
          "dp"
        ],
        "description": "Solve Binary-Search Problem 536. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "dp"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p209",
        "name": "Binary-Search Problem 209",
        "platform": "leetcode",
        "code": "LC209",
        "link": "https://leetcode.com/problems/binary-search-problem-209/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1637,
        "striver": true,
        "tags": [
          "trees",
          "recursion"
        ],
        "description": "Solve Binary-Search Problem 209. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "recursion"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p498",
        "name": "Binary-Search Problem 498",
        "platform": "codeforces",
        "code": "CF366H",
        "link": "https://codeforces.com/problemset/problem/366/H",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1651,
        "striver": false,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Binary-Search Problem 498. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p694",
        "name": "Binary-Search Problem 694",
        "platform": "leetcode",
        "code": "LC694",
        "link": "https://leetcode.com/problems/binary-search-problem-694/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1654,
        "striver": false,
        "tags": [
          "dp",
          "greedy"
        ],
        "description": "Solve Binary-Search Problem 694. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "greedy"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p267",
        "name": "Binary-Search Problem 267",
        "platform": "leetcode",
        "code": "LC267",
        "link": "https://leetcode.com/problems/binary-search-problem-267/",
        "topic": "binary-search",
        "difficulty": "medium",
        "rating": 1663,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "greedy"
        ],
        "description": "Solve Binary-Search Problem 267. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "greedy"
        ],
        "companies": [
          "netflix",
          "uber"
        ]
      },
      {
        "id": "p645",
        "name": "Binary-Search Problem 645",
        "platform": "codechef",
        "code": "CCPROB645",
        "link": "https://www.codechef.com/problems/CCPROB645",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 1803,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Binary-Search Problem 645. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p526",
        "name": "Binary-Search Problem 526",
        "platform": "leetcode",
        "code": "LC526",
        "link": "https://leetcode.com/problems/binary-search-problem-526/",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 1831,
        "striver": false,
        "tags": [
          "recursion"
        ],
        "description": "Solve Binary-Search Problem 526. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p633",
        "name": "Binary-Search Problem 633",
        "platform": "codeforces",
        "code": "CF585G",
        "link": "https://codeforces.com/problemset/problem/585/G",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 1866,
        "striver": false,
        "tags": [
          "stack",
          "binary-search",
          "dfs"
        ],
        "description": "Solve Binary-Search Problem 633. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p714",
        "name": "Binary-Search Problem 714",
        "platform": "codechef",
        "code": "CCPROB714",
        "link": "https://www.codechef.com/problems/CCPROB714",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 1902,
        "striver": false,
        "tags": [
          "recursion",
          "strings"
        ],
        "description": "Solve Binary-Search Problem 714. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "strings"
        ],
        "companies": [
          "amazon",
          "microsoft"
        ]
      },
      {
        "id": "p325",
        "name": "Binary-Search Problem 325",
        "platform": "codechef",
        "code": "CCPROB325",
        "link": "https://www.codechef.com/problems/CCPROB325",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 1979,
        "striver": true,
        "tags": [
          "trees",
          "bit-manipulation"
        ],
        "description": "Solve Binary-Search Problem 325. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p263",
        "name": "Binary-Search Problem 263",
        "platform": "leetcode",
        "code": "LC263",
        "link": "https://leetcode.com/problems/binary-search-problem-263/",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 1997,
        "striver": true,
        "tags": [
          "recursion",
          "graphs",
          "bit-manipulation"
        ],
        "description": "Solve Binary-Search Problem 263. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p037",
        "name": "Binary-Search Problem 37",
        "platform": "leetcode",
        "code": "LC37",
        "link": "https://leetcode.com/problems/binary-search-problem-37/",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 2035,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Binary-Search Problem 37. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p257",
        "name": "Binary-Search Problem 257",
        "platform": "codechef",
        "code": "CCPROB257",
        "link": "https://www.codechef.com/problems/CCPROB257",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 2121,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Binary-Search Problem 257. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p225",
        "name": "Binary-Search Problem 225",
        "platform": "codechef",
        "code": "CCPROB225",
        "link": "https://www.codechef.com/problems/CCPROB225",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 2257,
        "striver": true,
        "tags": [
          "heap",
          "math",
          "dp"
        ],
        "description": "Solve Binary-Search Problem 225. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "math"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p097",
        "name": "Binary-Search Problem 97",
        "platform": "leetcode",
        "code": "LC97",
        "link": "https://leetcode.com/problems/binary-search-problem-97/",
        "topic": "binary-search",
        "difficulty": "hard",
        "rating": 2265,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Binary-Search Problem 97. Apply core binary-search concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "strings",
    "name": "Strings",
    "icon": "🔤",
    "color": "#84ffff",
    "problems": [
      {
        "id": "p427",
        "name": "Strings Problem 427",
        "platform": "codeforces",
        "code": "CF854C",
        "link": "https://codeforces.com/problemset/problem/854/C",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 817,
        "striver": true,
        "tags": [
          "bfs",
          "stack"
        ],
        "description": "Solve Strings Problem 427. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "stack"
        ],
        "companies": [
          "netflix",
          "apple"
        ]
      },
      {
        "id": "p036",
        "name": "Strings Problem 36",
        "platform": "leetcode",
        "code": "LC36",
        "link": "https://leetcode.com/problems/strings-problem-36/",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 822,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Strings Problem 36. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p460",
        "name": "Strings Problem 460",
        "platform": "codeforces",
        "code": "CF223A",
        "link": "https://codeforces.com/problemset/problem/223/A",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 822,
        "striver": false,
        "tags": [
          "trees",
          "bfs"
        ],
        "description": "Solve Strings Problem 460. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "bfs"
        ],
        "companies": [
          "uber",
          "amazon"
        ]
      },
      {
        "id": "p635",
        "name": "Strings Problem 635",
        "platform": "codeforces",
        "code": "CF417G",
        "link": "https://codeforces.com/problemset/problem/417/G",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 875,
        "striver": false,
        "tags": [
          "heap",
          "hashmap",
          "trees"
        ],
        "description": "Solve Strings Problem 635. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p094",
        "name": "Strings Problem 94",
        "platform": "leetcode",
        "code": "LC94",
        "link": "https://leetcode.com/problems/strings-problem-94/",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 902,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Strings Problem 94. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p098",
        "name": "Strings Problem 98",
        "platform": "leetcode",
        "code": "LC98",
        "link": "https://leetcode.com/problems/strings-problem-98/",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 906,
        "striver": true,
        "tags": [
          "recursion",
          "bfs",
          "dp"
        ],
        "description": "Solve Strings Problem 98. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p471",
        "name": "Strings Problem 471",
        "platform": "codeforces",
        "code": "CF1053B",
        "link": "https://codeforces.com/problemset/problem/1053/B",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 947,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Strings Problem 471. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p220",
        "name": "Strings Problem 220",
        "platform": "leetcode",
        "code": "LC220",
        "link": "https://leetcode.com/problems/strings-problem-220/",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 974,
        "striver": true,
        "tags": [
          "heap",
          "trees"
        ],
        "description": "Solve Strings Problem 220. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "trees"
        ],
        "companies": [
          "adobe",
          "meta"
        ]
      },
      {
        "id": "p004",
        "name": "Strings Problem 4",
        "platform": "codechef",
        "code": "CCPROB4",
        "link": "https://www.codechef.com/problems/CCPROB4",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 1009,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Strings Problem 4. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "netflix",
          "uber"
        ]
      },
      {
        "id": "p718",
        "name": "Strings Problem 718",
        "platform": "codeforces",
        "code": "CF765H",
        "link": "https://codeforces.com/problemset/problem/765/H",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 1015,
        "striver": false,
        "tags": [
          "binary-search",
          "dp",
          "dfs"
        ],
        "description": "Solve Strings Problem 718. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "dp"
        ],
        "companies": [
          "google",
          "amazon"
        ]
      },
      {
        "id": "p260",
        "name": "Strings Problem 260",
        "platform": "codechef",
        "code": "CCPROB260",
        "link": "https://www.codechef.com/problems/CCPROB260",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 1032,
        "striver": true,
        "tags": [
          "queue",
          "trees",
          "dp"
        ],
        "description": "Solve Strings Problem 260. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "trees"
        ],
        "companies": [
          "apple",
          "meta"
        ]
      },
      {
        "id": "p186",
        "name": "Strings Problem 186",
        "platform": "codeforces",
        "code": "CF1672C",
        "link": "https://codeforces.com/problemset/problem/1672/C",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 1088,
        "striver": true,
        "tags": [
          "dp"
        ],
        "description": "Solve Strings Problem 186. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p475",
        "name": "Strings Problem 475",
        "platform": "leetcode",
        "code": "LC475",
        "link": "https://leetcode.com/problems/strings-problem-475/",
        "topic": "strings",
        "difficulty": "easy",
        "rating": 1092,
        "striver": false,
        "tags": [
          "stack",
          "bit-manipulation"
        ],
        "description": "Solve Strings Problem 475. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "bit-manipulation"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p636",
        "name": "Strings Problem 636",
        "platform": "codechef",
        "code": "CCPROB636",
        "link": "https://www.codechef.com/problems/CCPROB636",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1213,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Strings Problem 636. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p732",
        "name": "Strings Problem 732",
        "platform": "leetcode",
        "code": "LC732",
        "link": "https://leetcode.com/problems/strings-problem-732/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1279,
        "striver": false,
        "tags": [
          "hashmap",
          "math",
          "stack"
        ],
        "description": "Solve Strings Problem 732. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "math"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p001",
        "name": "Strings Problem 1",
        "platform": "codeforces",
        "code": "CF16C",
        "link": "https://codeforces.com/problemset/problem/16/C",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1328,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Strings Problem 1. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p108",
        "name": "Strings Problem 108",
        "platform": "leetcode",
        "code": "LC108",
        "link": "https://leetcode.com/problems/strings-problem-108/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1333,
        "striver": true,
        "tags": [
          "recursion",
          "binary-search"
        ],
        "description": "Solve Strings Problem 108. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "binary-search"
        ],
        "companies": [
          "adobe",
          "uber"
        ]
      },
      {
        "id": "p273",
        "name": "Strings Problem 273",
        "platform": "leetcode",
        "code": "LC273",
        "link": "https://leetcode.com/problems/strings-problem-273/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1333,
        "striver": true,
        "tags": [
          "dfs",
          "math"
        ],
        "description": "Solve Strings Problem 273. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "math"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p075",
        "name": "Strings Problem 75",
        "platform": "codeforces",
        "code": "CF1107A",
        "link": "https://codeforces.com/problemset/problem/1107/A",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1359,
        "striver": true,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Strings Problem 75. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "microsoft",
          "amazon"
        ]
      },
      {
        "id": "p106",
        "name": "Strings Problem 106",
        "platform": "leetcode",
        "code": "LC106",
        "link": "https://leetcode.com/problems/strings-problem-106/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1432,
        "striver": true,
        "tags": [
          "bfs",
          "dfs"
        ],
        "description": "Solve Strings Problem 106. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p169",
        "name": "Strings Problem 169",
        "platform": "codeforces",
        "code": "CF199B",
        "link": "https://codeforces.com/problemset/problem/199/B",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1432,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Strings Problem 169. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p245",
        "name": "Strings Problem 245",
        "platform": "codeforces",
        "code": "CF1809G",
        "link": "https://codeforces.com/problemset/problem/1809/G",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1488,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Strings Problem 245. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p690",
        "name": "Strings Problem 690",
        "platform": "leetcode",
        "code": "LC690",
        "link": "https://leetcode.com/problems/strings-problem-690/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1519,
        "striver": false,
        "tags": [
          "bfs"
        ],
        "description": "Solve Strings Problem 690. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "meta",
          "adobe"
        ]
      },
      {
        "id": "p218",
        "name": "Strings Problem 218",
        "platform": "codeforces",
        "code": "CF1458E",
        "link": "https://codeforces.com/problemset/problem/1458/E",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1605,
        "striver": true,
        "tags": [
          "dfs",
          "math"
        ],
        "description": "Solve Strings Problem 218. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "math"
        ],
        "companies": [
          "microsoft",
          "adobe"
        ]
      },
      {
        "id": "p416",
        "name": "Strings Problem 416",
        "platform": "leetcode",
        "code": "LC416",
        "link": "https://leetcode.com/problems/strings-problem-416/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1606,
        "striver": true,
        "tags": [
          "binary-search",
          "greedy",
          "bit-manipulation"
        ],
        "description": "Solve Strings Problem 416. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p531",
        "name": "Strings Problem 531",
        "platform": "leetcode",
        "code": "LC531",
        "link": "https://leetcode.com/problems/strings-problem-531/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1614,
        "striver": false,
        "tags": [
          "arrays",
          "greedy",
          "hashmap"
        ],
        "description": "Solve Strings Problem 531. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "greedy"
        ],
        "companies": [
          "microsoft",
          "netflix"
        ]
      },
      {
        "id": "p323",
        "name": "Strings Problem 323",
        "platform": "codechef",
        "code": "CCPROB323",
        "link": "https://www.codechef.com/problems/CCPROB323",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1639,
        "striver": true,
        "tags": [
          "strings",
          "bfs",
          "heap"
        ],
        "description": "Solve Strings Problem 323. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p131",
        "name": "Strings Problem 131",
        "platform": "leetcode",
        "code": "LC131",
        "link": "https://leetcode.com/problems/strings-problem-131/",
        "topic": "strings",
        "difficulty": "medium",
        "rating": 1660,
        "striver": true,
        "tags": [
          "recursion",
          "stack",
          "greedy"
        ],
        "description": "Solve Strings Problem 131. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "stack"
        ],
        "companies": [
          "google",
          "adobe"
        ]
      },
      {
        "id": "p674",
        "name": "Strings Problem 674",
        "platform": "leetcode",
        "code": "LC674",
        "link": "https://leetcode.com/problems/strings-problem-674/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 1903,
        "striver": false,
        "tags": [
          "greedy",
          "trees",
          "arrays"
        ],
        "description": "Solve Strings Problem 674. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "trees"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p256",
        "name": "Strings Problem 256",
        "platform": "leetcode",
        "code": "LC256",
        "link": "https://leetcode.com/problems/strings-problem-256/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 1923,
        "striver": true,
        "tags": [
          "heap",
          "graphs",
          "greedy"
        ],
        "description": "Solve Strings Problem 256. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "graphs"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p379",
        "name": "Strings Problem 379",
        "platform": "leetcode",
        "code": "LC379",
        "link": "https://leetcode.com/problems/strings-problem-379/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 1973,
        "striver": true,
        "tags": [
          "dp"
        ],
        "description": "Solve Strings Problem 379. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p078",
        "name": "Strings Problem 78",
        "platform": "leetcode",
        "code": "LC78",
        "link": "https://leetcode.com/problems/strings-problem-78/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2014,
        "striver": true,
        "tags": [
          "binary-search",
          "two-pointers",
          "dp"
        ],
        "description": "Solve Strings Problem 78. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "two-pointers"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p084",
        "name": "Strings Problem 84",
        "platform": "codechef",
        "code": "CCPROB84",
        "link": "https://www.codechef.com/problems/CCPROB84",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2014,
        "striver": true,
        "tags": [
          "binary-search",
          "arrays"
        ],
        "description": "Solve Strings Problem 84. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "arrays"
        ],
        "companies": [
          "google",
          "microsoft"
        ]
      },
      {
        "id": "p660",
        "name": "Strings Problem 660",
        "platform": "leetcode",
        "code": "LC660",
        "link": "https://leetcode.com/problems/strings-problem-660/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2034,
        "striver": false,
        "tags": [
          "math",
          "dp"
        ],
        "description": "Solve Strings Problem 660. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dp"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p420",
        "name": "Strings Problem 420",
        "platform": "leetcode",
        "code": "LC420",
        "link": "https://leetcode.com/problems/strings-problem-420/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2043,
        "striver": true,
        "tags": [
          "heap",
          "arrays"
        ],
        "description": "Solve Strings Problem 420. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "arrays"
        ],
        "companies": []
      },
      {
        "id": "p337",
        "name": "Strings Problem 337",
        "platform": "codechef",
        "code": "CCPROB337",
        "link": "https://www.codechef.com/problems/CCPROB337",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2165,
        "striver": true,
        "tags": [
          "arrays",
          "dfs"
        ],
        "description": "Solve Strings Problem 337. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "dfs"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p495",
        "name": "Strings Problem 495",
        "platform": "leetcode",
        "code": "LC495",
        "link": "https://leetcode.com/problems/strings-problem-495/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2171,
        "striver": false,
        "tags": [
          "trees",
          "heap",
          "hashmap"
        ],
        "description": "Solve Strings Problem 495. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p204",
        "name": "Strings Problem 204",
        "platform": "leetcode",
        "code": "LC204",
        "link": "https://leetcode.com/problems/strings-problem-204/",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2216,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Strings Problem 204. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "google",
          "netflix"
        ]
      },
      {
        "id": "p643",
        "name": "Strings Problem 643",
        "platform": "codeforces",
        "code": "CF1586E",
        "link": "https://codeforces.com/problemset/problem/1586/E",
        "topic": "strings",
        "difficulty": "hard",
        "rating": 2253,
        "striver": false,
        "tags": [
          "strings"
        ],
        "description": "Solve Strings Problem 643. Apply core strings concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "apple",
          "google"
        ]
      }
    ]
  },
  {
    "id": "linked-list",
    "name": "Linked List",
    "icon": "🔗",
    "color": "#ccff90",
    "problems": [
      {
        "id": "p165",
        "name": "Linked-List Problem 165",
        "platform": "leetcode",
        "code": "LC165",
        "link": "https://leetcode.com/problems/linked-list-problem-165/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 834,
        "striver": true,
        "tags": [
          "queue",
          "trees"
        ],
        "description": "Solve Linked-List Problem 165. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p139",
        "name": "Linked-List Problem 139",
        "platform": "leetcode",
        "code": "LC139",
        "link": "https://leetcode.com/problems/linked-list-problem-139/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 858,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Linked-List Problem 139. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p018",
        "name": "Linked-List Problem 18",
        "platform": "codeforces",
        "code": "CF1844F",
        "link": "https://codeforces.com/problemset/problem/1844/F",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 887,
        "striver": true,
        "tags": [
          "math",
          "trees"
        ],
        "description": "Solve Linked-List Problem 18. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "math",
          "trees"
        ],
        "companies": [
          "microsoft",
          "google"
        ]
      },
      {
        "id": "p168",
        "name": "Linked-List Problem 168",
        "platform": "codeforces",
        "code": "CF144E",
        "link": "https://codeforces.com/problemset/problem/144/E",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 913,
        "striver": true,
        "tags": [
          "hashmap",
          "bfs"
        ],
        "description": "Solve Linked-List Problem 168. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p090",
        "name": "Linked-List Problem 90",
        "platform": "leetcode",
        "code": "LC90",
        "link": "https://leetcode.com/problems/linked-list-problem-90/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 926,
        "striver": true,
        "tags": [
          "recursion",
          "strings"
        ],
        "description": "Solve Linked-List Problem 90. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "strings"
        ],
        "companies": [
          "adobe",
          "microsoft"
        ]
      },
      {
        "id": "p040",
        "name": "Linked-List Problem 40",
        "platform": "codeforces",
        "code": "CF398E",
        "link": "https://codeforces.com/problemset/problem/398/E",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 929,
        "striver": true,
        "tags": [
          "arrays"
        ],
        "description": "Solve Linked-List Problem 40. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p575",
        "name": "Linked-List Problem 575",
        "platform": "codechef",
        "code": "CCPROB575",
        "link": "https://www.codechef.com/problems/CCPROB575",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 934,
        "striver": false,
        "tags": [
          "bfs"
        ],
        "description": "Solve Linked-List Problem 575. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "microsoft",
          "adobe"
        ]
      },
      {
        "id": "p199",
        "name": "Linked-List Problem 199",
        "platform": "leetcode",
        "code": "LC199",
        "link": "https://leetcode.com/problems/linked-list-problem-199/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 958,
        "striver": true,
        "tags": [
          "math",
          "heap"
        ],
        "description": "Solve Linked-List Problem 199. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "google",
          "netflix"
        ]
      },
      {
        "id": "p667",
        "name": "Linked-List Problem 667",
        "platform": "leetcode",
        "code": "LC667",
        "link": "https://leetcode.com/problems/linked-list-problem-667/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 974,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Linked-List Problem 667. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "amazon",
          "google"
        ]
      },
      {
        "id": "p538",
        "name": "Linked-List Problem 538",
        "platform": "codeforces",
        "code": "CF558D",
        "link": "https://codeforces.com/problemset/problem/558/D",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 982,
        "striver": false,
        "tags": [
          "dp",
          "math"
        ],
        "description": "Solve Linked-List Problem 538. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "math"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p624",
        "name": "Linked-List Problem 624",
        "platform": "codechef",
        "code": "CCPROB624",
        "link": "https://www.codechef.com/problems/CCPROB624",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 1008,
        "striver": false,
        "tags": [
          "dp",
          "two-pointers",
          "heap"
        ],
        "description": "Solve Linked-List Problem 624. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p107",
        "name": "Linked-List Problem 107",
        "platform": "leetcode",
        "code": "LC107",
        "link": "https://leetcode.com/problems/linked-list-problem-107/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 1078,
        "striver": true,
        "tags": [
          "dfs",
          "greedy",
          "trees"
        ],
        "description": "Solve Linked-List Problem 107. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "greedy"
        ],
        "companies": [
          "microsoft",
          "uber"
        ]
      },
      {
        "id": "p270",
        "name": "Linked-List Problem 270",
        "platform": "leetcode",
        "code": "LC270",
        "link": "https://leetcode.com/problems/linked-list-problem-270/",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 1086,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Linked-List Problem 270. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p565",
        "name": "Linked-List Problem 565",
        "platform": "codeforces",
        "code": "CF1210H",
        "link": "https://codeforces.com/problemset/problem/1210/H",
        "topic": "linked-list",
        "difficulty": "easy",
        "rating": 1094,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Linked-List Problem 565. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p039",
        "name": "Linked-List Problem 39",
        "platform": "leetcode",
        "code": "LC39",
        "link": "https://leetcode.com/problems/linked-list-problem-39/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1220,
        "striver": true,
        "tags": [
          "strings",
          "trees",
          "dfs"
        ],
        "description": "Solve Linked-List Problem 39. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "trees"
        ],
        "companies": [
          "adobe",
          "meta"
        ]
      },
      {
        "id": "p135",
        "name": "Linked-List Problem 135",
        "platform": "leetcode",
        "code": "LC135",
        "link": "https://leetcode.com/problems/linked-list-problem-135/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1238,
        "striver": true,
        "tags": [
          "greedy",
          "graphs",
          "binary-search"
        ],
        "description": "Solve Linked-List Problem 135. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "graphs"
        ],
        "companies": [
          "netflix",
          "microsoft"
        ]
      },
      {
        "id": "p634",
        "name": "Linked-List Problem 634",
        "platform": "leetcode",
        "code": "LC634",
        "link": "https://leetcode.com/problems/linked-list-problem-634/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1239,
        "striver": false,
        "tags": [
          "stack",
          "arrays",
          "dfs"
        ],
        "description": "Solve Linked-List Problem 634. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "arrays"
        ],
        "companies": []
      },
      {
        "id": "p515",
        "name": "Linked-List Problem 515",
        "platform": "leetcode",
        "code": "LC515",
        "link": "https://leetcode.com/problems/linked-list-problem-515/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1244,
        "striver": false,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Linked-List Problem 515. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p216",
        "name": "Linked-List Problem 216",
        "platform": "leetcode",
        "code": "LC216",
        "link": "https://leetcode.com/problems/linked-list-problem-216/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1270,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "bfs",
          "math"
        ],
        "description": "Solve Linked-List Problem 216. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "bfs"
        ],
        "companies": [
          "apple",
          "meta"
        ]
      },
      {
        "id": "p177",
        "name": "Linked-List Problem 177",
        "platform": "codechef",
        "code": "CCPROB177",
        "link": "https://www.codechef.com/problems/CCPROB177",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1291,
        "striver": true,
        "tags": [
          "dp"
        ],
        "description": "Solve Linked-List Problem 177. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p128",
        "name": "Linked-List Problem 128",
        "platform": "codeforces",
        "code": "CF1464D",
        "link": "https://codeforces.com/problemset/problem/1464/D",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1315,
        "striver": true,
        "tags": [
          "two-pointers",
          "queue"
        ],
        "description": "Solve Linked-List Problem 128. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p354",
        "name": "Linked-List Problem 354",
        "platform": "codeforces",
        "code": "CF586A",
        "link": "https://codeforces.com/problemset/problem/586/A",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1375,
        "striver": true,
        "tags": [
          "two-pointers",
          "queue"
        ],
        "description": "Solve Linked-List Problem 354. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "queue"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p567",
        "name": "Linked-List Problem 567",
        "platform": "codeforces",
        "code": "CF1790C",
        "link": "https://codeforces.com/problemset/problem/1790/C",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1380,
        "striver": false,
        "tags": [
          "hashmap",
          "bit-manipulation",
          "strings"
        ],
        "description": "Solve Linked-List Problem 567. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p353",
        "name": "Linked-List Problem 353",
        "platform": "leetcode",
        "code": "LC353",
        "link": "https://leetcode.com/problems/linked-list-problem-353/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1383,
        "striver": true,
        "tags": [
          "math",
          "arrays"
        ],
        "description": "Solve Linked-List Problem 353. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "math",
          "arrays"
        ],
        "companies": [
          "adobe",
          "amazon"
        ]
      },
      {
        "id": "p461",
        "name": "Linked-List Problem 461",
        "platform": "leetcode",
        "code": "LC461",
        "link": "https://leetcode.com/problems/linked-list-problem-461/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1417,
        "striver": false,
        "tags": [
          "dp",
          "binary-search"
        ],
        "description": "Solve Linked-List Problem 461. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p678",
        "name": "Linked-List Problem 678",
        "platform": "leetcode",
        "code": "LC678",
        "link": "https://leetcode.com/problems/linked-list-problem-678/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1484,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Linked-List Problem 678. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p153",
        "name": "Linked-List Problem 153",
        "platform": "leetcode",
        "code": "LC153",
        "link": "https://leetcode.com/problems/linked-list-problem-153/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1486,
        "striver": true,
        "tags": [
          "dp",
          "bfs"
        ],
        "description": "Solve Linked-List Problem 153. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p028",
        "name": "Linked-List Problem 28",
        "platform": "leetcode",
        "code": "LC28",
        "link": "https://leetcode.com/problems/linked-list-problem-28/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1523,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Linked-List Problem 28. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "meta",
          "netflix"
        ]
      },
      {
        "id": "p444",
        "name": "Linked-List Problem 444",
        "platform": "codechef",
        "code": "CCPROB444",
        "link": "https://www.codechef.com/problems/CCPROB444",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1568,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Linked-List Problem 444. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p476",
        "name": "Linked-List Problem 476",
        "platform": "codeforces",
        "code": "CF780F",
        "link": "https://codeforces.com/problemset/problem/780/F",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1582,
        "striver": false,
        "tags": [
          "heap",
          "math"
        ],
        "description": "Solve Linked-List Problem 476. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p103",
        "name": "Linked-List Problem 103",
        "platform": "leetcode",
        "code": "LC103",
        "link": "https://leetcode.com/problems/linked-list-problem-103/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1587,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Linked-List Problem 103. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p574",
        "name": "Linked-List Problem 574",
        "platform": "leetcode",
        "code": "LC574",
        "link": "https://leetcode.com/problems/linked-list-problem-574/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1598,
        "striver": false,
        "tags": [
          "greedy"
        ],
        "description": "Solve Linked-List Problem 574. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p553",
        "name": "Linked-List Problem 553",
        "platform": "leetcode",
        "code": "LC553",
        "link": "https://leetcode.com/problems/linked-list-problem-553/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1599,
        "striver": false,
        "tags": [
          "binary-search",
          "two-pointers",
          "bfs"
        ],
        "description": "Solve Linked-List Problem 553. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "two-pointers"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p294",
        "name": "Linked-List Problem 294",
        "platform": "codeforces",
        "code": "CF1285H",
        "link": "https://codeforces.com/problemset/problem/1285/H",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1609,
        "striver": true,
        "tags": [
          "strings",
          "dp",
          "graphs"
        ],
        "description": "Solve Linked-List Problem 294. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "dp"
        ],
        "companies": [
          "adobe",
          "amazon"
        ]
      },
      {
        "id": "p022",
        "name": "Linked-List Problem 22",
        "platform": "leetcode",
        "code": "LC22",
        "link": "https://leetcode.com/problems/linked-list-problem-22/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1635,
        "striver": true,
        "tags": [
          "stack",
          "dp"
        ],
        "description": "Solve Linked-List Problem 22. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "dp"
        ],
        "companies": [
          "google",
          "microsoft"
        ]
      },
      {
        "id": "p426",
        "name": "Linked-List Problem 426",
        "platform": "codeforces",
        "code": "CF718F",
        "link": "https://codeforces.com/problemset/problem/718/F",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1647,
        "striver": true,
        "tags": [
          "two-pointers",
          "dp",
          "queue"
        ],
        "description": "Solve Linked-List Problem 426. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p580",
        "name": "Linked-List Problem 580",
        "platform": "leetcode",
        "code": "LC580",
        "link": "https://leetcode.com/problems/linked-list-problem-580/",
        "topic": "linked-list",
        "difficulty": "medium",
        "rating": 1691,
        "striver": false,
        "tags": [
          "dp"
        ],
        "description": "Solve Linked-List Problem 580. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p407",
        "name": "Linked-List Problem 407",
        "platform": "codechef",
        "code": "CCPROB407",
        "link": "https://www.codechef.com/problems/CCPROB407",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 1800,
        "striver": true,
        "tags": [
          "hashmap",
          "math"
        ],
        "description": "Solve Linked-List Problem 407. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "math"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p750",
        "name": "Linked-List Problem 750",
        "platform": "leetcode",
        "code": "LC750",
        "link": "https://leetcode.com/problems/linked-list-problem-750/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 1908,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "strings"
        ],
        "description": "Solve Linked-List Problem 750. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "strings"
        ],
        "companies": [
          "google",
          "apple"
        ]
      },
      {
        "id": "p699",
        "name": "Linked-List Problem 699",
        "platform": "codechef",
        "code": "CCPROB699",
        "link": "https://www.codechef.com/problems/CCPROB699",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 1925,
        "striver": false,
        "tags": [
          "trees",
          "bfs",
          "two-pointers"
        ],
        "description": "Solve Linked-List Problem 699. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "bfs"
        ],
        "companies": [
          "meta",
          "netflix"
        ]
      },
      {
        "id": "p654",
        "name": "Linked-List Problem 654",
        "platform": "leetcode",
        "code": "LC654",
        "link": "https://leetcode.com/problems/linked-list-problem-654/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 1978,
        "striver": false,
        "tags": [
          "bfs",
          "trees",
          "dp"
        ],
        "description": "Solve Linked-List Problem 654. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "trees"
        ],
        "companies": [
          "netflix",
          "google"
        ]
      },
      {
        "id": "p604",
        "name": "Linked-List Problem 604",
        "platform": "leetcode",
        "code": "LC604",
        "link": "https://leetcode.com/problems/linked-list-problem-604/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2013,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Linked-List Problem 604. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p133",
        "name": "Linked-List Problem 133",
        "platform": "codechef",
        "code": "CCPROB133",
        "link": "https://www.codechef.com/problems/CCPROB133",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2059,
        "striver": true,
        "tags": [
          "hashmap",
          "queue"
        ],
        "description": "Solve Linked-List Problem 133. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "queue"
        ],
        "companies": [
          "meta",
          "adobe"
        ]
      },
      {
        "id": "p262",
        "name": "Linked-List Problem 262",
        "platform": "leetcode",
        "code": "LC262",
        "link": "https://leetcode.com/problems/linked-list-problem-262/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2112,
        "striver": true,
        "tags": [
          "dfs",
          "strings"
        ],
        "description": "Solve Linked-List Problem 262. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p440",
        "name": "Linked-List Problem 440",
        "platform": "leetcode",
        "code": "LC440",
        "link": "https://leetcode.com/problems/linked-list-problem-440/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2136,
        "striver": true,
        "tags": [
          "two-pointers",
          "math"
        ],
        "description": "Solve Linked-List Problem 440. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "math"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p668",
        "name": "Linked-List Problem 668",
        "platform": "codeforces",
        "code": "CF873A",
        "link": "https://codeforces.com/problemset/problem/873/A",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2179,
        "striver": false,
        "tags": [
          "hashmap",
          "bfs"
        ],
        "description": "Solve Linked-List Problem 668. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "bfs"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p333",
        "name": "Linked-List Problem 333",
        "platform": "codeforces",
        "code": "CF93G",
        "link": "https://codeforces.com/problemset/problem/93/G",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2205,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Linked-List Problem 333. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p463",
        "name": "Linked-List Problem 463",
        "platform": "leetcode",
        "code": "LC463",
        "link": "https://leetcode.com/problems/linked-list-problem-463/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2253,
        "striver": false,
        "tags": [
          "stack",
          "dp"
        ],
        "description": "Solve Linked-List Problem 463. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "dp"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p679",
        "name": "Linked-List Problem 679",
        "platform": "leetcode",
        "code": "LC679",
        "link": "https://leetcode.com/problems/linked-list-problem-679/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2269,
        "striver": false,
        "tags": [
          "hashmap",
          "binary-search"
        ],
        "description": "Solve Linked-List Problem 679. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p176",
        "name": "Linked-List Problem 176",
        "platform": "codechef",
        "code": "CCPROB176",
        "link": "https://www.codechef.com/problems/CCPROB176",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2309,
        "striver": true,
        "tags": [
          "binary-search",
          "dfs"
        ],
        "description": "Solve Linked-List Problem 176. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p237",
        "name": "Linked-List Problem 237",
        "platform": "leetcode",
        "code": "LC237",
        "link": "https://leetcode.com/problems/linked-list-problem-237/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2319,
        "striver": true,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Linked-List Problem 237. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "uber",
          "meta"
        ]
      },
      {
        "id": "p559",
        "name": "Linked-List Problem 559",
        "platform": "leetcode",
        "code": "LC559",
        "link": "https://leetcode.com/problems/linked-list-problem-559/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2321,
        "striver": false,
        "tags": [
          "two-pointers",
          "dp"
        ],
        "description": "Solve Linked-List Problem 559. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "dp"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p685",
        "name": "Linked-List Problem 685",
        "platform": "leetcode",
        "code": "LC685",
        "link": "https://leetcode.com/problems/linked-list-problem-685/",
        "topic": "linked-list",
        "difficulty": "hard",
        "rating": 2399,
        "striver": false,
        "tags": [
          "heap",
          "two-pointers",
          "recursion"
        ],
        "description": "Solve Linked-List Problem 685. Apply core linked-list concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "two-pointers"
        ],
        "companies": [
          "amazon",
          "adobe"
        ]
      }
    ]
  },
  {
    "id": "stack",
    "name": "Stack",
    "icon": "📚",
    "color": "#ff8a80",
    "problems": [
      {
        "id": "p182",
        "name": "Stack Problem 182",
        "platform": "codechef",
        "code": "CCPROB182",
        "link": "https://www.codechef.com/problems/CCPROB182",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 819,
        "striver": true,
        "tags": [
          "bfs",
          "graphs"
        ],
        "description": "Solve Stack Problem 182. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "graphs"
        ],
        "companies": [
          "microsoft",
          "google"
        ]
      },
      {
        "id": "p406",
        "name": "Stack Problem 406",
        "platform": "leetcode",
        "code": "LC406",
        "link": "https://leetcode.com/problems/stack-problem-406/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 820,
        "striver": true,
        "tags": [
          "hashmap",
          "strings",
          "recursion"
        ],
        "description": "Solve Stack Problem 406. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "strings"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p393",
        "name": "Stack Problem 393",
        "platform": "leetcode",
        "code": "LC393",
        "link": "https://leetcode.com/problems/stack-problem-393/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 870,
        "striver": true,
        "tags": [
          "graphs",
          "math"
        ],
        "description": "Solve Stack Problem 393. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "math"
        ],
        "companies": [
          "google",
          "amazon"
        ]
      },
      {
        "id": "p737",
        "name": "Stack Problem 737",
        "platform": "leetcode",
        "code": "LC737",
        "link": "https://leetcode.com/problems/stack-problem-737/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 907,
        "striver": false,
        "tags": [
          "math",
          "two-pointers"
        ],
        "description": "Solve Stack Problem 737. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "math",
          "two-pointers"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p450",
        "name": "Stack Problem 450",
        "platform": "codeforces",
        "code": "CF870H",
        "link": "https://codeforces.com/problemset/problem/870/H",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 937,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Stack Problem 450. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p611",
        "name": "Stack Problem 611",
        "platform": "leetcode",
        "code": "LC611",
        "link": "https://leetcode.com/problems/stack-problem-611/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 942,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Stack Problem 611. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p315",
        "name": "Stack Problem 315",
        "platform": "leetcode",
        "code": "LC315",
        "link": "https://leetcode.com/problems/stack-problem-315/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 1016,
        "striver": true,
        "tags": [
          "binary-search",
          "math"
        ],
        "description": "Solve Stack Problem 315. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "math"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p506",
        "name": "Stack Problem 506",
        "platform": "leetcode",
        "code": "LC506",
        "link": "https://leetcode.com/problems/stack-problem-506/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 1035,
        "striver": false,
        "tags": [
          "strings",
          "stack",
          "bfs"
        ],
        "description": "Solve Stack Problem 506. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "stack"
        ],
        "companies": [
          "amazon",
          "google"
        ]
      },
      {
        "id": "p615",
        "name": "Stack Problem 615",
        "platform": "codechef",
        "code": "CCPROB615",
        "link": "https://www.codechef.com/problems/CCPROB615",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 1072,
        "striver": false,
        "tags": [
          "greedy",
          "bit-manipulation",
          "trees"
        ],
        "description": "Solve Stack Problem 615. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p641",
        "name": "Stack Problem 641",
        "platform": "leetcode",
        "code": "LC641",
        "link": "https://leetcode.com/problems/stack-problem-641/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 1074,
        "striver": false,
        "tags": [
          "bfs",
          "bit-manipulation",
          "stack"
        ],
        "description": "Solve Stack Problem 641. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "bit-manipulation"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p373",
        "name": "Stack Problem 373",
        "platform": "leetcode",
        "code": "LC373",
        "link": "https://leetcode.com/problems/stack-problem-373/",
        "topic": "stack",
        "difficulty": "easy",
        "rating": 1082,
        "striver": true,
        "tags": [
          "stack",
          "graphs"
        ],
        "description": "Solve Stack Problem 373. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "graphs"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p015",
        "name": "Stack Problem 15",
        "platform": "codeforces",
        "code": "CF265F",
        "link": "https://codeforces.com/problemset/problem/265/F",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1233,
        "striver": true,
        "tags": [
          "recursion",
          "dfs"
        ],
        "description": "Solve Stack Problem 15. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "dfs"
        ],
        "companies": [
          "apple",
          "adobe"
        ]
      },
      {
        "id": "p502",
        "name": "Stack Problem 502",
        "platform": "leetcode",
        "code": "LC502",
        "link": "https://leetcode.com/problems/stack-problem-502/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1243,
        "striver": false,
        "tags": [
          "dp",
          "heap"
        ],
        "description": "Solve Stack Problem 502. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "heap"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p358",
        "name": "Stack Problem 358",
        "platform": "leetcode",
        "code": "LC358",
        "link": "https://leetcode.com/problems/stack-problem-358/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1310,
        "striver": true,
        "tags": [
          "recursion",
          "bit-manipulation"
        ],
        "description": "Solve Stack Problem 358. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "bit-manipulation"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p483",
        "name": "Stack Problem 483",
        "platform": "leetcode",
        "code": "LC483",
        "link": "https://leetcode.com/problems/stack-problem-483/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1360,
        "striver": false,
        "tags": [
          "dfs",
          "recursion"
        ],
        "description": "Solve Stack Problem 483. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "recursion"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p251",
        "name": "Stack Problem 251",
        "platform": "codeforces",
        "code": "CF965E",
        "link": "https://codeforces.com/problemset/problem/965/E",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1416,
        "striver": true,
        "tags": [
          "dfs",
          "trees",
          "binary-search"
        ],
        "description": "Solve Stack Problem 251. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p224",
        "name": "Stack Problem 224",
        "platform": "codechef",
        "code": "CCPROB224",
        "link": "https://www.codechef.com/problems/CCPROB224",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1422,
        "striver": true,
        "tags": [
          "greedy",
          "bfs"
        ],
        "description": "Solve Stack Problem 224. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p230",
        "name": "Stack Problem 230",
        "platform": "leetcode",
        "code": "LC230",
        "link": "https://leetcode.com/problems/stack-problem-230/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1464,
        "striver": true,
        "tags": [
          "two-pointers",
          "stack"
        ],
        "description": "Solve Stack Problem 230. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p187",
        "name": "Stack Problem 187",
        "platform": "leetcode",
        "code": "LC187",
        "link": "https://leetcode.com/problems/stack-problem-187/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1524,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "greedy"
        ],
        "description": "Solve Stack Problem 187. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "greedy"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p429",
        "name": "Stack Problem 429",
        "platform": "codeforces",
        "code": "CF1717A",
        "link": "https://codeforces.com/problemset/problem/1717/A",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1547,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Stack Problem 429. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p127",
        "name": "Stack Problem 127",
        "platform": "leetcode",
        "code": "LC127",
        "link": "https://leetcode.com/problems/stack-problem-127/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1562,
        "striver": true,
        "tags": [
          "binary-search",
          "recursion",
          "stack"
        ],
        "description": "Solve Stack Problem 127. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "recursion"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p465",
        "name": "Stack Problem 465",
        "platform": "codeforces",
        "code": "CF547G",
        "link": "https://codeforces.com/problemset/problem/547/G",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1582,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Stack Problem 465. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": []
      },
      {
        "id": "p391",
        "name": "Stack Problem 391",
        "platform": "codechef",
        "code": "CCPROB391",
        "link": "https://www.codechef.com/problems/CCPROB391",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1610,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Stack Problem 391. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p113",
        "name": "Stack Problem 113",
        "platform": "leetcode",
        "code": "LC113",
        "link": "https://leetcode.com/problems/stack-problem-113/",
        "topic": "stack",
        "difficulty": "medium",
        "rating": 1626,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Stack Problem 113. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p707",
        "name": "Stack Problem 707",
        "platform": "leetcode",
        "code": "LC707",
        "link": "https://leetcode.com/problems/stack-problem-707/",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1808,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Stack Problem 707. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p244",
        "name": "Stack Problem 244",
        "platform": "codeforces",
        "code": "CF1275H",
        "link": "https://codeforces.com/problemset/problem/1275/H",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1812,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Stack Problem 244. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p713",
        "name": "Stack Problem 713",
        "platform": "leetcode",
        "code": "LC713",
        "link": "https://leetcode.com/problems/stack-problem-713/",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1824,
        "striver": false,
        "tags": [
          "stack",
          "dp"
        ],
        "description": "Solve Stack Problem 713. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "dp"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p194",
        "name": "Stack Problem 194",
        "platform": "codeforces",
        "code": "CF1702F",
        "link": "https://codeforces.com/problemset/problem/1702/F",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1825,
        "striver": true,
        "tags": [
          "math",
          "trees",
          "strings"
        ],
        "description": "Solve Stack Problem 194. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "math",
          "trees"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p481",
        "name": "Stack Problem 481",
        "platform": "leetcode",
        "code": "LC481",
        "link": "https://leetcode.com/problems/stack-problem-481/",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1848,
        "striver": false,
        "tags": [
          "recursion"
        ],
        "description": "Solve Stack Problem 481. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "adobe",
          "meta"
        ]
      },
      {
        "id": "p512",
        "name": "Stack Problem 512",
        "platform": "codechef",
        "code": "CCPROB512",
        "link": "https://www.codechef.com/problems/CCPROB512",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1851,
        "striver": false,
        "tags": [
          "dp",
          "greedy"
        ],
        "description": "Solve Stack Problem 512. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p442",
        "name": "Stack Problem 442",
        "platform": "leetcode",
        "code": "LC442",
        "link": "https://leetcode.com/problems/stack-problem-442/",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1893,
        "striver": true,
        "tags": [
          "strings",
          "hashmap"
        ],
        "description": "Solve Stack Problem 442. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "hashmap"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p722",
        "name": "Stack Problem 722",
        "platform": "leetcode",
        "code": "LC722",
        "link": "https://leetcode.com/problems/stack-problem-722/",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1897,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Stack Problem 722. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "microsoft",
          "google"
        ]
      },
      {
        "id": "p466",
        "name": "Stack Problem 466",
        "platform": "codechef",
        "code": "CCPROB466",
        "link": "https://www.codechef.com/problems/CCPROB466",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 1945,
        "striver": false,
        "tags": [
          "math",
          "greedy",
          "binary-search"
        ],
        "description": "Solve Stack Problem 466. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "math",
          "greedy"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p568",
        "name": "Stack Problem 568",
        "platform": "codechef",
        "code": "CCPROB568",
        "link": "https://www.codechef.com/problems/CCPROB568",
        "topic": "stack",
        "difficulty": "hard",
        "rating": 2152,
        "striver": false,
        "tags": [
          "graphs",
          "recursion",
          "trees"
        ],
        "description": "Solve Stack Problem 568. Apply core stack concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "recursion"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "queue",
    "name": "Queue",
    "icon": "🚶",
    "color": "#82b1ff",
    "problems": [
      {
        "id": "p190",
        "name": "Queue Problem 190",
        "platform": "codechef",
        "code": "CCPROB190",
        "link": "https://www.codechef.com/problems/CCPROB190",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 802,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Queue Problem 190. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p549",
        "name": "Queue Problem 549",
        "platform": "codeforces",
        "code": "CF583C",
        "link": "https://codeforces.com/problemset/problem/583/C",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 821,
        "striver": false,
        "tags": [
          "queue",
          "bit-manipulation",
          "dp"
        ],
        "description": "Solve Queue Problem 549. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "bit-manipulation"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p180",
        "name": "Queue Problem 180",
        "platform": "codeforces",
        "code": "CF1734F",
        "link": "https://codeforces.com/problemset/problem/1734/F",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 837,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Queue Problem 180. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "google",
          "meta"
        ]
      },
      {
        "id": "p041",
        "name": "Queue Problem 41",
        "platform": "leetcode",
        "code": "LC41",
        "link": "https://leetcode.com/problems/queue-problem-41/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 843,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Queue Problem 41. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "netflix",
          "amazon"
        ]
      },
      {
        "id": "p409",
        "name": "Queue Problem 409",
        "platform": "leetcode",
        "code": "LC409",
        "link": "https://leetcode.com/problems/queue-problem-409/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 850,
        "striver": true,
        "tags": [
          "dfs",
          "math",
          "greedy"
        ],
        "description": "Solve Queue Problem 409. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "math"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p632",
        "name": "Queue Problem 632",
        "platform": "leetcode",
        "code": "LC632",
        "link": "https://leetcode.com/problems/queue-problem-632/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 859,
        "striver": false,
        "tags": [
          "greedy"
        ],
        "description": "Solve Queue Problem 632. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p743",
        "name": "Queue Problem 743",
        "platform": "leetcode",
        "code": "LC743",
        "link": "https://leetcode.com/problems/queue-problem-743/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 864,
        "striver": false,
        "tags": [
          "arrays",
          "math",
          "hashmap"
        ],
        "description": "Solve Queue Problem 743. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p305",
        "name": "Queue Problem 305",
        "platform": "leetcode",
        "code": "LC305",
        "link": "https://leetcode.com/problems/queue-problem-305/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 869,
        "striver": true,
        "tags": [
          "dfs",
          "stack",
          "greedy"
        ],
        "description": "Solve Queue Problem 305. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p355",
        "name": "Queue Problem 355",
        "platform": "leetcode",
        "code": "LC355",
        "link": "https://leetcode.com/problems/queue-problem-355/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 953,
        "striver": true,
        "tags": [
          "hashmap",
          "trees",
          "strings"
        ],
        "description": "Solve Queue Problem 355. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p698",
        "name": "Queue Problem 698",
        "platform": "leetcode",
        "code": "LC698",
        "link": "https://leetcode.com/problems/queue-problem-698/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 967,
        "striver": false,
        "tags": [
          "queue",
          "two-pointers"
        ],
        "description": "Solve Queue Problem 698. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "two-pointers"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p200",
        "name": "Queue Problem 200",
        "platform": "leetcode",
        "code": "LC200",
        "link": "https://leetcode.com/problems/queue-problem-200/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 975,
        "striver": true,
        "tags": [
          "dp",
          "trees",
          "heap"
        ],
        "description": "Solve Queue Problem 200. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p482",
        "name": "Queue Problem 482",
        "platform": "codechef",
        "code": "CCPROB482",
        "link": "https://www.codechef.com/problems/CCPROB482",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 997,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Queue Problem 482. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "adobe",
          "netflix"
        ]
      },
      {
        "id": "p275",
        "name": "Queue Problem 275",
        "platform": "codeforces",
        "code": "CF1113D",
        "link": "https://codeforces.com/problemset/problem/1113/D",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 1001,
        "striver": true,
        "tags": [
          "math"
        ],
        "description": "Solve Queue Problem 275. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "meta",
          "microsoft"
        ]
      },
      {
        "id": "p050",
        "name": "Queue Problem 50",
        "platform": "leetcode",
        "code": "LC50",
        "link": "https://leetcode.com/problems/queue-problem-50/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 1003,
        "striver": true,
        "tags": [
          "bfs",
          "hashmap",
          "trees"
        ],
        "description": "Solve Queue Problem 50. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "hashmap"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p246",
        "name": "Queue Problem 246",
        "platform": "leetcode",
        "code": "LC246",
        "link": "https://leetcode.com/problems/queue-problem-246/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 1049,
        "striver": true,
        "tags": [
          "two-pointers",
          "hashmap",
          "dp"
        ],
        "description": "Solve Queue Problem 246. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "hashmap"
        ],
        "companies": [
          "apple",
          "uber"
        ]
      },
      {
        "id": "p086",
        "name": "Queue Problem 86",
        "platform": "leetcode",
        "code": "LC86",
        "link": "https://leetcode.com/problems/queue-problem-86/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 1083,
        "striver": true,
        "tags": [
          "heap",
          "two-pointers"
        ],
        "description": "Solve Queue Problem 86. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p386",
        "name": "Queue Problem 386",
        "platform": "leetcode",
        "code": "LC386",
        "link": "https://leetcode.com/problems/queue-problem-386/",
        "topic": "queue",
        "difficulty": "easy",
        "rating": 1098,
        "striver": true,
        "tags": [
          "greedy",
          "math"
        ],
        "description": "Solve Queue Problem 386. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "math"
        ],
        "companies": [
          "uber",
          "apple"
        ]
      },
      {
        "id": "p651",
        "name": "Queue Problem 651",
        "platform": "codeforces",
        "code": "CF1091C",
        "link": "https://codeforces.com/problemset/problem/1091/C",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1266,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Queue Problem 651. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p215",
        "name": "Queue Problem 215",
        "platform": "leetcode",
        "code": "LC215",
        "link": "https://leetcode.com/problems/queue-problem-215/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1269,
        "striver": true,
        "tags": [
          "math",
          "heap"
        ],
        "description": "Solve Queue Problem 215. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      },
      {
        "id": "p287",
        "name": "Queue Problem 287",
        "platform": "leetcode",
        "code": "LC287",
        "link": "https://leetcode.com/problems/queue-problem-287/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1299,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Queue Problem 287. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "netflix",
          "microsoft"
        ]
      },
      {
        "id": "p129",
        "name": "Queue Problem 129",
        "platform": "codeforces",
        "code": "CF378E",
        "link": "https://codeforces.com/problemset/problem/378/E",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1301,
        "striver": true,
        "tags": [
          "binary-search",
          "stack"
        ],
        "description": "Solve Queue Problem 129. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p422",
        "name": "Queue Problem 422",
        "platform": "codeforces",
        "code": "CF68C",
        "link": "https://codeforces.com/problemset/problem/68/C",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1381,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Queue Problem 422. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p390",
        "name": "Queue Problem 390",
        "platform": "leetcode",
        "code": "LC390",
        "link": "https://leetcode.com/problems/queue-problem-390/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1453,
        "striver": true,
        "tags": [
          "strings",
          "arrays",
          "recursion"
        ],
        "description": "Solve Queue Problem 390. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "arrays"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p096",
        "name": "Queue Problem 96",
        "platform": "codechef",
        "code": "CCPROB96",
        "link": "https://www.codechef.com/problems/CCPROB96",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1496,
        "striver": true,
        "tags": [
          "trees",
          "greedy",
          "hashmap"
        ],
        "description": "Solve Queue Problem 96. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p243",
        "name": "Queue Problem 243",
        "platform": "codechef",
        "code": "CCPROB243",
        "link": "https://www.codechef.com/problems/CCPROB243",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1511,
        "striver": true,
        "tags": [
          "trees",
          "dfs"
        ],
        "description": "Solve Queue Problem 243. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "dfs"
        ],
        "companies": [
          "netflix",
          "uber"
        ]
      },
      {
        "id": "p532",
        "name": "Queue Problem 532",
        "platform": "leetcode",
        "code": "LC532",
        "link": "https://leetcode.com/problems/queue-problem-532/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1532,
        "striver": false,
        "tags": [
          "dfs",
          "binary-search",
          "bit-manipulation"
        ],
        "description": "Solve Queue Problem 532. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "binary-search"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p675",
        "name": "Queue Problem 675",
        "platform": "leetcode",
        "code": "LC675",
        "link": "https://leetcode.com/problems/queue-problem-675/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1536,
        "striver": false,
        "tags": [
          "strings",
          "math",
          "bit-manipulation"
        ],
        "description": "Solve Queue Problem 675. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p299",
        "name": "Queue Problem 299",
        "platform": "leetcode",
        "code": "LC299",
        "link": "https://leetcode.com/problems/queue-problem-299/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1563,
        "striver": true,
        "tags": [
          "greedy",
          "queue"
        ],
        "description": "Solve Queue Problem 299. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "queue"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p546",
        "name": "Queue Problem 546",
        "platform": "leetcode",
        "code": "LC546",
        "link": "https://leetcode.com/problems/queue-problem-546/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1649,
        "striver": false,
        "tags": [
          "dp",
          "math",
          "bit-manipulation"
        ],
        "description": "Solve Queue Problem 546. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p626",
        "name": "Queue Problem 626",
        "platform": "leetcode",
        "code": "LC626",
        "link": "https://leetcode.com/problems/queue-problem-626/",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1654,
        "striver": false,
        "tags": [
          "two-pointers",
          "dfs",
          "heap"
        ],
        "description": "Solve Queue Problem 626. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "dfs"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p670",
        "name": "Queue Problem 670",
        "platform": "codechef",
        "code": "CCPROB670",
        "link": "https://www.codechef.com/problems/CCPROB670",
        "topic": "queue",
        "difficulty": "medium",
        "rating": 1687,
        "striver": false,
        "tags": [
          "hashmap",
          "dfs"
        ],
        "description": "Solve Queue Problem 670. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "dfs"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p352",
        "name": "Queue Problem 352",
        "platform": "leetcode",
        "code": "LC352",
        "link": "https://leetcode.com/problems/queue-problem-352/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 1808,
        "striver": true,
        "tags": [
          "trees",
          "heap"
        ],
        "description": "Solve Queue Problem 352. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p110",
        "name": "Queue Problem 110",
        "platform": "leetcode",
        "code": "LC110",
        "link": "https://leetcode.com/problems/queue-problem-110/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 1813,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Queue Problem 110. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p007",
        "name": "Queue Problem 7",
        "platform": "leetcode",
        "code": "LC7",
        "link": "https://leetcode.com/problems/queue-problem-7/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 1917,
        "striver": true,
        "tags": [
          "math",
          "recursion"
        ],
        "description": "Solve Queue Problem 7. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "math",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p509",
        "name": "Queue Problem 509",
        "platform": "leetcode",
        "code": "LC509",
        "link": "https://leetcode.com/problems/queue-problem-509/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 1970,
        "striver": false,
        "tags": [
          "queue",
          "graphs"
        ],
        "description": "Solve Queue Problem 509. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "graphs"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p508",
        "name": "Queue Problem 508",
        "platform": "leetcode",
        "code": "LC508",
        "link": "https://leetcode.com/problems/queue-problem-508/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 1994,
        "striver": false,
        "tags": [
          "hashmap",
          "greedy",
          "math"
        ],
        "description": "Solve Queue Problem 508. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "greedy"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p474",
        "name": "Queue Problem 474",
        "platform": "leetcode",
        "code": "LC474",
        "link": "https://leetcode.com/problems/queue-problem-474/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2004,
        "striver": false,
        "tags": [
          "strings"
        ],
        "description": "Solve Queue Problem 474. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p310",
        "name": "Queue Problem 310",
        "platform": "codeforces",
        "code": "CF876H",
        "link": "https://codeforces.com/problemset/problem/876/H",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2032,
        "striver": true,
        "tags": [
          "strings",
          "queue"
        ],
        "description": "Solve Queue Problem 310. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "queue"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p637",
        "name": "Queue Problem 637",
        "platform": "leetcode",
        "code": "LC637",
        "link": "https://leetcode.com/problems/queue-problem-637/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2052,
        "striver": false,
        "tags": [
          "greedy"
        ],
        "description": "Solve Queue Problem 637. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p359",
        "name": "Queue Problem 359",
        "platform": "codeforces",
        "code": "CF1317D",
        "link": "https://codeforces.com/problemset/problem/1317/D",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2081,
        "striver": true,
        "tags": [
          "stack",
          "greedy",
          "math"
        ],
        "description": "Solve Queue Problem 359. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "greedy"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p184",
        "name": "Queue Problem 184",
        "platform": "leetcode",
        "code": "LC184",
        "link": "https://leetcode.com/problems/queue-problem-184/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2144,
        "striver": true,
        "tags": [
          "heap",
          "stack",
          "queue"
        ],
        "description": "Solve Queue Problem 184. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "stack"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p396",
        "name": "Queue Problem 396",
        "platform": "codechef",
        "code": "CCPROB396",
        "link": "https://www.codechef.com/problems/CCPROB396",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2190,
        "striver": true,
        "tags": [
          "dp",
          "dfs",
          "bfs"
        ],
        "description": "Solve Queue Problem 396. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p234",
        "name": "Queue Problem 234",
        "platform": "codeforces",
        "code": "CF709D",
        "link": "https://codeforces.com/problemset/problem/709/D",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2274,
        "striver": true,
        "tags": [
          "strings"
        ],
        "description": "Solve Queue Problem 234. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p435",
        "name": "Queue Problem 435",
        "platform": "codeforces",
        "code": "CF1478B",
        "link": "https://codeforces.com/problemset/problem/1478/B",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2311,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Queue Problem 435. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p183",
        "name": "Queue Problem 183",
        "platform": "codechef",
        "code": "CCPROB183",
        "link": "https://www.codechef.com/problems/CCPROB183",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2367,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Queue Problem 183. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p545",
        "name": "Queue Problem 545",
        "platform": "leetcode",
        "code": "LC545",
        "link": "https://leetcode.com/problems/queue-problem-545/",
        "topic": "queue",
        "difficulty": "hard",
        "rating": 2397,
        "striver": false,
        "tags": [
          "two-pointers",
          "math",
          "recursion"
        ],
        "description": "Solve Queue Problem 545. Apply core queue concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "math"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      }
    ]
  },
  {
    "id": "sliding-window",
    "name": "Sliding Window / Two Pointer",
    "icon": "🪟",
    "color": "#81d4fa",
    "problems": [
      {
        "id": "p137",
        "name": "Sliding-Window Problem 137",
        "platform": "leetcode",
        "code": "LC137",
        "link": "https://leetcode.com/problems/sliding-window-problem-137/",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 835,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "arrays"
        ],
        "description": "Solve Sliding-Window Problem 137. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "arrays"
        ],
        "companies": [
          "microsoft",
          "amazon"
        ]
      },
      {
        "id": "p011",
        "name": "Sliding-Window Problem 11",
        "platform": "codeforces",
        "code": "CF800D",
        "link": "https://codeforces.com/problemset/problem/800/D",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 850,
        "striver": true,
        "tags": [
          "dfs",
          "greedy",
          "trees"
        ],
        "description": "Solve Sliding-Window Problem 11. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "greedy"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p550",
        "name": "Sliding-Window Problem 550",
        "platform": "codeforces",
        "code": "CF1280C",
        "link": "https://codeforces.com/problemset/problem/1280/C",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 890,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Sliding-Window Problem 550. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "uber",
          "apple"
        ]
      },
      {
        "id": "p062",
        "name": "Sliding-Window Problem 62",
        "platform": "codeforces",
        "code": "CF783D",
        "link": "https://codeforces.com/problemset/problem/783/D",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 900,
        "striver": true,
        "tags": [
          "two-pointers",
          "heap"
        ],
        "description": "Solve Sliding-Window Problem 62. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p579",
        "name": "Sliding-Window Problem 579",
        "platform": "leetcode",
        "code": "LC579",
        "link": "https://leetcode.com/problems/sliding-window-problem-579/",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 908,
        "striver": false,
        "tags": [
          "dfs",
          "math",
          "bfs"
        ],
        "description": "Solve Sliding-Window Problem 579. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "math"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p746",
        "name": "Sliding-Window Problem 746",
        "platform": "codechef",
        "code": "CCPROB746",
        "link": "https://www.codechef.com/problems/CCPROB746",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 967,
        "striver": false,
        "tags": [
          "heap",
          "queue",
          "binary-search"
        ],
        "description": "Solve Sliding-Window Problem 746. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "queue"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p412",
        "name": "Sliding-Window Problem 412",
        "platform": "leetcode",
        "code": "LC412",
        "link": "https://leetcode.com/problems/sliding-window-problem-412/",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 980,
        "striver": true,
        "tags": [
          "hashmap",
          "bit-manipulation"
        ],
        "description": "Solve Sliding-Window Problem 412. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p371",
        "name": "Sliding-Window Problem 371",
        "platform": "codeforces",
        "code": "CF1597E",
        "link": "https://codeforces.com/problemset/problem/1597/E",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 986,
        "striver": true,
        "tags": [
          "bfs",
          "math",
          "recursion"
        ],
        "description": "Solve Sliding-Window Problem 371. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "math"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p382",
        "name": "Sliding-Window Problem 382",
        "platform": "leetcode",
        "code": "LC382",
        "link": "https://leetcode.com/problems/sliding-window-problem-382/",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1013,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Sliding-Window Problem 382. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p119",
        "name": "Sliding-Window Problem 119",
        "platform": "codeforces",
        "code": "CF1321F",
        "link": "https://codeforces.com/problemset/problem/1321/F",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1031,
        "striver": true,
        "tags": [
          "queue",
          "stack",
          "binary-search"
        ],
        "description": "Solve Sliding-Window Problem 119. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "stack"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p428",
        "name": "Sliding-Window Problem 428",
        "platform": "codeforces",
        "code": "CF177C",
        "link": "https://codeforces.com/problemset/problem/177/C",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1071,
        "striver": true,
        "tags": [
          "trees",
          "math",
          "hashmap"
        ],
        "description": "Solve Sliding-Window Problem 428. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "math"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p456",
        "name": "Sliding-Window Problem 456",
        "platform": "leetcode",
        "code": "LC456",
        "link": "https://leetcode.com/problems/sliding-window-problem-456/",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1075,
        "striver": false,
        "tags": [
          "queue",
          "binary-search"
        ],
        "description": "Solve Sliding-Window Problem 456. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "binary-search"
        ],
        "companies": [
          "meta",
          "microsoft"
        ]
      },
      {
        "id": "p092",
        "name": "Sliding-Window Problem 92",
        "platform": "codechef",
        "code": "CCPROB92",
        "link": "https://www.codechef.com/problems/CCPROB92",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1080,
        "striver": true,
        "tags": [
          "bfs",
          "dp",
          "heap"
        ],
        "description": "Solve Sliding-Window Problem 92. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "dp"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p100",
        "name": "Sliding-Window Problem 100",
        "platform": "leetcode",
        "code": "LC100",
        "link": "https://leetcode.com/problems/sliding-window-problem-100/",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1081,
        "striver": true,
        "tags": [
          "bfs",
          "math",
          "two-pointers"
        ],
        "description": "Solve Sliding-Window Problem 100. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "math"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p453",
        "name": "Sliding-Window Problem 453",
        "platform": "codeforces",
        "code": "CF1751B",
        "link": "https://codeforces.com/problemset/problem/1751/B",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1087,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Sliding-Window Problem 453. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p079",
        "name": "Sliding-Window Problem 79",
        "platform": "codeforces",
        "code": "CF1599H",
        "link": "https://codeforces.com/problemset/problem/1599/H",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1090,
        "striver": true,
        "tags": [
          "stack",
          "two-pointers"
        ],
        "description": "Solve Sliding-Window Problem 79. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p307",
        "name": "Sliding-Window Problem 307",
        "platform": "codeforces",
        "code": "CF824E",
        "link": "https://codeforces.com/problemset/problem/824/E",
        "topic": "sliding-window",
        "difficulty": "easy",
        "rating": 1100,
        "striver": true,
        "tags": [
          "greedy",
          "math",
          "two-pointers"
        ],
        "description": "Solve Sliding-Window Problem 307. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "math"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p659",
        "name": "Sliding-Window Problem 659",
        "platform": "codechef",
        "code": "CCPROB659",
        "link": "https://www.codechef.com/problems/CCPROB659",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1202,
        "striver": false,
        "tags": [
          "stack",
          "math"
        ],
        "description": "Solve Sliding-Window Problem 659. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "math"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p174",
        "name": "Sliding-Window Problem 174",
        "platform": "codeforces",
        "code": "CF1249F",
        "link": "https://codeforces.com/problemset/problem/1249/F",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1205,
        "striver": true,
        "tags": [
          "graphs",
          "stack",
          "bit-manipulation"
        ],
        "description": "Solve Sliding-Window Problem 174. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p021",
        "name": "Sliding-Window Problem 21",
        "platform": "codeforces",
        "code": "CF993E",
        "link": "https://codeforces.com/problemset/problem/993/E",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1241,
        "striver": true,
        "tags": [
          "queue",
          "binary-search"
        ],
        "description": "Solve Sliding-Window Problem 21. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "binary-search"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p712",
        "name": "Sliding-Window Problem 712",
        "platform": "codeforces",
        "code": "CF1900B",
        "link": "https://codeforces.com/problemset/problem/1900/B",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1256,
        "striver": false,
        "tags": [
          "bfs",
          "two-pointers"
        ],
        "description": "Solve Sliding-Window Problem 712. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "two-pointers"
        ],
        "companies": [
          "microsoft",
          "adobe"
        ]
      },
      {
        "id": "p480",
        "name": "Sliding-Window Problem 480",
        "platform": "leetcode",
        "code": "LC480",
        "link": "https://leetcode.com/problems/sliding-window-problem-480/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1294,
        "striver": false,
        "tags": [
          "queue",
          "recursion",
          "dfs"
        ],
        "description": "Solve Sliding-Window Problem 480. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "recursion"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p240",
        "name": "Sliding-Window Problem 240",
        "platform": "codeforces",
        "code": "CF569H",
        "link": "https://codeforces.com/problemset/problem/569/H",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1342,
        "striver": true,
        "tags": [
          "trees",
          "binary-search",
          "math"
        ],
        "description": "Solve Sliding-Window Problem 240. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p235",
        "name": "Sliding-Window Problem 235",
        "platform": "leetcode",
        "code": "LC235",
        "link": "https://leetcode.com/problems/sliding-window-problem-235/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1348,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Sliding-Window Problem 235. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p081",
        "name": "Sliding-Window Problem 81",
        "platform": "codechef",
        "code": "CCPROB81",
        "link": "https://www.codechef.com/problems/CCPROB81",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1354,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Sliding-Window Problem 81. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p136",
        "name": "Sliding-Window Problem 136",
        "platform": "codeforces",
        "code": "CF57H",
        "link": "https://codeforces.com/problemset/problem/57/H",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1370,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Sliding-Window Problem 136. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p697",
        "name": "Sliding-Window Problem 697",
        "platform": "leetcode",
        "code": "LC697",
        "link": "https://leetcode.com/problems/sliding-window-problem-697/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1372,
        "striver": false,
        "tags": [
          "graphs",
          "trees",
          "bit-manipulation"
        ],
        "description": "Solve Sliding-Window Problem 697. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "trees"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p441",
        "name": "Sliding-Window Problem 441",
        "platform": "leetcode",
        "code": "LC441",
        "link": "https://leetcode.com/problems/sliding-window-problem-441/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1383,
        "striver": true,
        "tags": [
          "dp",
          "bit-manipulation"
        ],
        "description": "Solve Sliding-Window Problem 441. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "bit-manipulation"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p226",
        "name": "Sliding-Window Problem 226",
        "platform": "leetcode",
        "code": "LC226",
        "link": "https://leetcode.com/problems/sliding-window-problem-226/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1469,
        "striver": true,
        "tags": [
          "bfs",
          "heap"
        ],
        "description": "Solve Sliding-Window Problem 226. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "heap"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p644",
        "name": "Sliding-Window Problem 644",
        "platform": "leetcode",
        "code": "LC644",
        "link": "https://leetcode.com/problems/sliding-window-problem-644/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1473,
        "striver": false,
        "tags": [
          "arrays",
          "recursion"
        ],
        "description": "Solve Sliding-Window Problem 644. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p342",
        "name": "Sliding-Window Problem 342",
        "platform": "leetcode",
        "code": "LC342",
        "link": "https://leetcode.com/problems/sliding-window-problem-342/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1504,
        "striver": true,
        "tags": [
          "dfs",
          "stack",
          "binary-search"
        ],
        "description": "Solve Sliding-Window Problem 342. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p541",
        "name": "Sliding-Window Problem 541",
        "platform": "codechef",
        "code": "CCPROB541",
        "link": "https://www.codechef.com/problems/CCPROB541",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1544,
        "striver": false,
        "tags": [
          "graphs"
        ],
        "description": "Solve Sliding-Window Problem 541. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "microsoft",
          "amazon"
        ]
      },
      {
        "id": "p657",
        "name": "Sliding-Window Problem 657",
        "platform": "codechef",
        "code": "CCPROB657",
        "link": "https://www.codechef.com/problems/CCPROB657",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1599,
        "striver": false,
        "tags": [
          "two-pointers",
          "greedy"
        ],
        "description": "Solve Sliding-Window Problem 657. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "greedy"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p126",
        "name": "Sliding-Window Problem 126",
        "platform": "leetcode",
        "code": "LC126",
        "link": "https://leetcode.com/problems/sliding-window-problem-126/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1688,
        "striver": true,
        "tags": [
          "queue",
          "arrays"
        ],
        "description": "Solve Sliding-Window Problem 126. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "arrays"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p016",
        "name": "Sliding-Window Problem 16",
        "platform": "codechef",
        "code": "CCPROB16",
        "link": "https://www.codechef.com/problems/CCPROB16",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1695,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Sliding-Window Problem 16. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p500",
        "name": "Sliding-Window Problem 500",
        "platform": "leetcode",
        "code": "LC500",
        "link": "https://leetcode.com/problems/sliding-window-problem-500/",
        "topic": "sliding-window",
        "difficulty": "medium",
        "rating": 1700,
        "striver": false,
        "tags": [
          "binary-search",
          "queue",
          "hashmap"
        ],
        "description": "Solve Sliding-Window Problem 500. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p496",
        "name": "Sliding-Window Problem 496",
        "platform": "leetcode",
        "code": "LC496",
        "link": "https://leetcode.com/problems/sliding-window-problem-496/",
        "topic": "sliding-window",
        "difficulty": "hard",
        "rating": 2040,
        "striver": false,
        "tags": [
          "greedy",
          "two-pointers",
          "math"
        ],
        "description": "Solve Sliding-Window Problem 496. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p709",
        "name": "Sliding-Window Problem 709",
        "platform": "leetcode",
        "code": "LC709",
        "link": "https://leetcode.com/problems/sliding-window-problem-709/",
        "topic": "sliding-window",
        "difficulty": "hard",
        "rating": 2095,
        "striver": false,
        "tags": [
          "graphs",
          "hashmap",
          "recursion"
        ],
        "description": "Solve Sliding-Window Problem 709. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p239",
        "name": "Sliding-Window Problem 239",
        "platform": "codechef",
        "code": "CCPROB239",
        "link": "https://www.codechef.com/problems/CCPROB239",
        "topic": "sliding-window",
        "difficulty": "hard",
        "rating": 2130,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Sliding-Window Problem 239. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p734",
        "name": "Sliding-Window Problem 734",
        "platform": "leetcode",
        "code": "LC734",
        "link": "https://leetcode.com/problems/sliding-window-problem-734/",
        "topic": "sliding-window",
        "difficulty": "hard",
        "rating": 2190,
        "striver": false,
        "tags": [
          "math",
          "bfs"
        ],
        "description": "Solve Sliding-Window Problem 734. Apply core sliding-window concepts to compute the required result.",
        "prerequisite": [
          "math",
          "bfs"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "heap",
    "name": "Heap / Priority Queue",
    "icon": "⛰️",
    "color": "#ff5252",
    "problems": [
      {
        "id": "p054",
        "name": "Heap Problem 54",
        "platform": "codeforces",
        "code": "CF389D",
        "link": "https://codeforces.com/problemset/problem/389/D",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 810,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Heap Problem 54. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p424",
        "name": "Heap Problem 424",
        "platform": "leetcode",
        "code": "LC424",
        "link": "https://leetcode.com/problems/heap-problem-424/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 830,
        "striver": true,
        "tags": [
          "two-pointers",
          "strings",
          "stack"
        ],
        "description": "Solve Heap Problem 424. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p059",
        "name": "Heap Problem 59",
        "platform": "leetcode",
        "code": "LC59",
        "link": "https://leetcode.com/problems/heap-problem-59/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 844,
        "striver": true,
        "tags": [
          "queue",
          "binary-search"
        ],
        "description": "Solve Heap Problem 59. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "binary-search"
        ],
        "companies": [
          "uber",
          "amazon"
        ]
      },
      {
        "id": "p592",
        "name": "Heap Problem 592",
        "platform": "codeforces",
        "code": "CF1160A",
        "link": "https://codeforces.com/problemset/problem/1160/A",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 844,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "dfs"
        ],
        "description": "Solve Heap Problem 592. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "dfs"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p069",
        "name": "Heap Problem 69",
        "platform": "codeforces",
        "code": "CF1408E",
        "link": "https://codeforces.com/problemset/problem/1408/E",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 921,
        "striver": true,
        "tags": [
          "binary-search",
          "bit-manipulation",
          "recursion"
        ],
        "description": "Solve Heap Problem 69. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "bit-manipulation"
        ],
        "companies": [
          "google",
          "apple"
        ]
      },
      {
        "id": "p156",
        "name": "Heap Problem 156",
        "platform": "codeforces",
        "code": "CF847H",
        "link": "https://codeforces.com/problemset/problem/847/H",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 932,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Heap Problem 156. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p052",
        "name": "Heap Problem 52",
        "platform": "leetcode",
        "code": "LC52",
        "link": "https://leetcode.com/problems/heap-problem-52/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 942,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Heap Problem 52. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "amazon",
          "google"
        ]
      },
      {
        "id": "p717",
        "name": "Heap Problem 717",
        "platform": "codeforces",
        "code": "CF1696E",
        "link": "https://codeforces.com/problemset/problem/1696/E",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 957,
        "striver": false,
        "tags": [
          "heap",
          "trees"
        ],
        "description": "Solve Heap Problem 717. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "trees"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p421",
        "name": "Heap Problem 421",
        "platform": "leetcode",
        "code": "LC421",
        "link": "https://leetcode.com/problems/heap-problem-421/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 979,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Heap Problem 421. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p344",
        "name": "Heap Problem 344",
        "platform": "codeforces",
        "code": "CF98B",
        "link": "https://codeforces.com/problemset/problem/98/B",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 985,
        "striver": true,
        "tags": [
          "two-pointers",
          "bfs",
          "graphs"
        ],
        "description": "Solve Heap Problem 344. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "bfs"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p434",
        "name": "Heap Problem 434",
        "platform": "leetcode",
        "code": "LC434",
        "link": "https://leetcode.com/problems/heap-problem-434/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 986,
        "striver": true,
        "tags": [
          "binary-search",
          "stack",
          "graphs"
        ],
        "description": "Solve Heap Problem 434. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "stack"
        ],
        "companies": [
          "uber",
          "amazon"
        ]
      },
      {
        "id": "p308",
        "name": "Heap Problem 308",
        "platform": "leetcode",
        "code": "LC308",
        "link": "https://leetcode.com/problems/heap-problem-308/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 1000,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Heap Problem 308. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p701",
        "name": "Heap Problem 701",
        "platform": "leetcode",
        "code": "LC701",
        "link": "https://leetcode.com/problems/heap-problem-701/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 1036,
        "striver": false,
        "tags": [
          "greedy"
        ],
        "description": "Solve Heap Problem 701. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p387",
        "name": "Heap Problem 387",
        "platform": "leetcode",
        "code": "LC387",
        "link": "https://leetcode.com/problems/heap-problem-387/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 1039,
        "striver": true,
        "tags": [
          "hashmap",
          "graphs"
        ],
        "description": "Solve Heap Problem 387. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "graphs"
        ],
        "companies": [
          "meta",
          "uber"
        ]
      },
      {
        "id": "p395",
        "name": "Heap Problem 395",
        "platform": "leetcode",
        "code": "LC395",
        "link": "https://leetcode.com/problems/heap-problem-395/",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 1057,
        "striver": true,
        "tags": [
          "hashmap",
          "graphs",
          "arrays"
        ],
        "description": "Solve Heap Problem 395. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "graphs"
        ],
        "companies": [
          "uber",
          "meta"
        ]
      },
      {
        "id": "p032",
        "name": "Heap Problem 32",
        "platform": "codeforces",
        "code": "CF1481E",
        "link": "https://codeforces.com/problemset/problem/1481/E",
        "topic": "heap",
        "difficulty": "easy",
        "rating": 1090,
        "striver": true,
        "tags": [
          "recursion",
          "arrays"
        ],
        "description": "Solve Heap Problem 32. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "arrays"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p043",
        "name": "Heap Problem 43",
        "platform": "leetcode",
        "code": "LC43",
        "link": "https://leetcode.com/problems/heap-problem-43/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1232,
        "striver": true,
        "tags": [
          "heap",
          "graphs"
        ],
        "description": "Solve Heap Problem 43. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "graphs"
        ],
        "companies": [
          "uber",
          "amazon"
        ]
      },
      {
        "id": "p341",
        "name": "Heap Problem 341",
        "platform": "codechef",
        "code": "CCPROB341",
        "link": "https://www.codechef.com/problems/CCPROB341",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1261,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Heap Problem 341. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p572",
        "name": "Heap Problem 572",
        "platform": "leetcode",
        "code": "LC572",
        "link": "https://leetcode.com/problems/heap-problem-572/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1335,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Heap Problem 572. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "netflix",
          "apple"
        ]
      },
      {
        "id": "p254",
        "name": "Heap Problem 254",
        "platform": "leetcode",
        "code": "LC254",
        "link": "https://leetcode.com/problems/heap-problem-254/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1336,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Heap Problem 254. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p255",
        "name": "Heap Problem 255",
        "platform": "codechef",
        "code": "CCPROB255",
        "link": "https://www.codechef.com/problems/CCPROB255",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1429,
        "striver": true,
        "tags": [
          "stack",
          "bfs"
        ],
        "description": "Solve Heap Problem 255. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "bfs"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p309",
        "name": "Heap Problem 309",
        "platform": "codeforces",
        "code": "CF283F",
        "link": "https://codeforces.com/problemset/problem/283/F",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1430,
        "striver": true,
        "tags": [
          "greedy",
          "arrays",
          "hashmap"
        ],
        "description": "Solve Heap Problem 309. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "arrays"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p602",
        "name": "Heap Problem 602",
        "platform": "leetcode",
        "code": "LC602",
        "link": "https://leetcode.com/problems/heap-problem-602/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1471,
        "striver": false,
        "tags": [
          "two-pointers",
          "greedy",
          "hashmap"
        ],
        "description": "Solve Heap Problem 602. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "greedy"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p730",
        "name": "Heap Problem 730",
        "platform": "codeforces",
        "code": "CF1477B",
        "link": "https://codeforces.com/problemset/problem/1477/B",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1503,
        "striver": false,
        "tags": [
          "math"
        ],
        "description": "Solve Heap Problem 730. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "adobe",
          "google"
        ]
      },
      {
        "id": "p702",
        "name": "Heap Problem 702",
        "platform": "leetcode",
        "code": "LC702",
        "link": "https://leetcode.com/problems/heap-problem-702/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1564,
        "striver": false,
        "tags": [
          "math",
          "heap",
          "binary-search"
        ],
        "description": "Solve Heap Problem 702. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p397",
        "name": "Heap Problem 397",
        "platform": "leetcode",
        "code": "LC397",
        "link": "https://leetcode.com/problems/heap-problem-397/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1584,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Heap Problem 397. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p170",
        "name": "Heap Problem 170",
        "platform": "leetcode",
        "code": "LC170",
        "link": "https://leetcode.com/problems/heap-problem-170/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1596,
        "striver": true,
        "tags": [
          "greedy",
          "dp"
        ],
        "description": "Solve Heap Problem 170. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "dp"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p648",
        "name": "Heap Problem 648",
        "platform": "leetcode",
        "code": "LC648",
        "link": "https://leetcode.com/problems/heap-problem-648/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1613,
        "striver": false,
        "tags": [
          "hashmap",
          "two-pointers"
        ],
        "description": "Solve Heap Problem 648. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "two-pointers"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p491",
        "name": "Heap Problem 491",
        "platform": "leetcode",
        "code": "LC491",
        "link": "https://leetcode.com/problems/heap-problem-491/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1683,
        "striver": false,
        "tags": [
          "binary-search",
          "two-pointers"
        ],
        "description": "Solve Heap Problem 491. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "two-pointers"
        ],
        "companies": [
          "adobe",
          "microsoft"
        ]
      },
      {
        "id": "p727",
        "name": "Heap Problem 727",
        "platform": "codeforces",
        "code": "CF604F",
        "link": "https://codeforces.com/problemset/problem/604/F",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1697,
        "striver": false,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Heap Problem 727. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p327",
        "name": "Heap Problem 327",
        "platform": "leetcode",
        "code": "LC327",
        "link": "https://leetcode.com/problems/heap-problem-327/",
        "topic": "heap",
        "difficulty": "medium",
        "rating": 1700,
        "striver": true,
        "tags": [
          "dfs",
          "trees",
          "arrays"
        ],
        "description": "Solve Heap Problem 327. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "trees"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p208",
        "name": "Heap Problem 208",
        "platform": "leetcode",
        "code": "LC208",
        "link": "https://leetcode.com/problems/heap-problem-208/",
        "topic": "heap",
        "difficulty": "hard",
        "rating": 1874,
        "striver": true,
        "tags": [
          "strings",
          "bfs"
        ],
        "description": "Solve Heap Problem 208. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": [
          "adobe",
          "google"
        ]
      },
      {
        "id": "p288",
        "name": "Heap Problem 288",
        "platform": "leetcode",
        "code": "LC288",
        "link": "https://leetcode.com/problems/heap-problem-288/",
        "topic": "heap",
        "difficulty": "hard",
        "rating": 1880,
        "striver": true,
        "tags": [
          "math",
          "two-pointers",
          "greedy"
        ],
        "description": "Solve Heap Problem 288. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "math",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p595",
        "name": "Heap Problem 595",
        "platform": "codechef",
        "code": "CCPROB595",
        "link": "https://www.codechef.com/problems/CCPROB595",
        "topic": "heap",
        "difficulty": "hard",
        "rating": 1943,
        "striver": false,
        "tags": [
          "graphs"
        ],
        "description": "Solve Heap Problem 595. Apply core heap concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "microsoft"
        ]
      }
    ]
  },
  {
    "id": "greedy",
    "name": "Greedy Algorithms",
    "icon": "🤑",
    "color": "#aeea00",
    "problems": [
      {
        "id": "p365",
        "name": "Greedy Problem 365",
        "platform": "leetcode",
        "code": "LC365",
        "link": "https://leetcode.com/problems/greedy-problem-365/",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 834,
        "striver": true,
        "tags": [
          "recursion",
          "bit-manipulation",
          "math"
        ],
        "description": "Solve Greedy Problem 365. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "bit-manipulation"
        ],
        "companies": [
          "apple",
          "adobe"
        ]
      },
      {
        "id": "p505",
        "name": "Greedy Problem 505",
        "platform": "leetcode",
        "code": "LC505",
        "link": "https://leetcode.com/problems/greedy-problem-505/",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 860,
        "striver": false,
        "tags": [
          "dfs",
          "math",
          "trees"
        ],
        "description": "Solve Greedy Problem 505. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "math"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p665",
        "name": "Greedy Problem 665",
        "platform": "codeforces",
        "code": "CF470D",
        "link": "https://codeforces.com/problemset/problem/470/D",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 912,
        "striver": false,
        "tags": [
          "recursion",
          "arrays",
          "graphs"
        ],
        "description": "Solve Greedy Problem 665. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "arrays"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p207",
        "name": "Greedy Problem 207",
        "platform": "codeforces",
        "code": "CF727E",
        "link": "https://codeforces.com/problemset/problem/727/E",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 913,
        "striver": true,
        "tags": [
          "graphs",
          "math",
          "arrays"
        ],
        "description": "Solve Greedy Problem 207. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "math"
        ],
        "companies": [
          "amazon",
          "google"
        ]
      },
      {
        "id": "p173",
        "name": "Greedy Problem 173",
        "platform": "leetcode",
        "code": "LC173",
        "link": "https://leetcode.com/problems/greedy-problem-173/",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 939,
        "striver": true,
        "tags": [
          "strings",
          "bfs",
          "stack"
        ],
        "description": "Solve Greedy Problem 173. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p528",
        "name": "Greedy Problem 528",
        "platform": "leetcode",
        "code": "LC528",
        "link": "https://leetcode.com/problems/greedy-problem-528/",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 950,
        "striver": false,
        "tags": [
          "graphs",
          "greedy"
        ],
        "description": "Solve Greedy Problem 528. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "greedy"
        ],
        "companies": [
          "amazon",
          "uber"
        ]
      },
      {
        "id": "p418",
        "name": "Greedy Problem 418",
        "platform": "codeforces",
        "code": "CF51E",
        "link": "https://codeforces.com/problemset/problem/51/E",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 1009,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Greedy Problem 418. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p720",
        "name": "Greedy Problem 720",
        "platform": "codeforces",
        "code": "CF647C",
        "link": "https://codeforces.com/problemset/problem/647/C",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 1010,
        "striver": false,
        "tags": [
          "heap",
          "dfs"
        ],
        "description": "Solve Greedy Problem 720. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "dfs"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p213",
        "name": "Greedy Problem 213",
        "platform": "codeforces",
        "code": "CF644C",
        "link": "https://codeforces.com/problemset/problem/644/C",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 1089,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Greedy Problem 213. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p380",
        "name": "Greedy Problem 380",
        "platform": "leetcode",
        "code": "LC380",
        "link": "https://leetcode.com/problems/greedy-problem-380/",
        "topic": "greedy",
        "difficulty": "easy",
        "rating": 1094,
        "striver": true,
        "tags": [
          "graphs",
          "recursion",
          "strings"
        ],
        "description": "Solve Greedy Problem 380. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "recursion"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p114",
        "name": "Greedy Problem 114",
        "platform": "leetcode",
        "code": "LC114",
        "link": "https://leetcode.com/problems/greedy-problem-114/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1258,
        "striver": true,
        "tags": [
          "two-pointers",
          "heap"
        ],
        "description": "Solve Greedy Problem 114. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "heap"
        ],
        "companies": [
          "adobe",
          "apple"
        ]
      },
      {
        "id": "p561",
        "name": "Greedy Problem 561",
        "platform": "leetcode",
        "code": "LC561",
        "link": "https://leetcode.com/problems/greedy-problem-561/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1259,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "binary-search",
          "arrays"
        ],
        "description": "Solve Greedy Problem 561. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "binary-search"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p587",
        "name": "Greedy Problem 587",
        "platform": "leetcode",
        "code": "LC587",
        "link": "https://leetcode.com/problems/greedy-problem-587/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1272,
        "striver": false,
        "tags": [
          "graphs"
        ],
        "description": "Solve Greedy Problem 587. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p681",
        "name": "Greedy Problem 681",
        "platform": "leetcode",
        "code": "LC681",
        "link": "https://leetcode.com/problems/greedy-problem-681/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1336,
        "striver": false,
        "tags": [
          "dp",
          "dfs",
          "queue"
        ],
        "description": "Solve Greedy Problem 681. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p405",
        "name": "Greedy Problem 405",
        "platform": "codechef",
        "code": "CCPROB405",
        "link": "https://www.codechef.com/problems/CCPROB405",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1341,
        "striver": true,
        "tags": [
          "binary-search",
          "bit-manipulation"
        ],
        "description": "Solve Greedy Problem 405. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "bit-manipulation"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p652",
        "name": "Greedy Problem 652",
        "platform": "leetcode",
        "code": "LC652",
        "link": "https://leetcode.com/problems/greedy-problem-652/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1422,
        "striver": false,
        "tags": [
          "binary-search",
          "math",
          "dp"
        ],
        "description": "Solve Greedy Problem 652. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p088",
        "name": "Greedy Problem 88",
        "platform": "leetcode",
        "code": "LC88",
        "link": "https://leetcode.com/problems/greedy-problem-88/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1431,
        "striver": true,
        "tags": [
          "hashmap",
          "binary-search",
          "math"
        ],
        "description": "Solve Greedy Problem 88. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "binary-search"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p178",
        "name": "Greedy Problem 178",
        "platform": "codechef",
        "code": "CCPROB178",
        "link": "https://www.codechef.com/problems/CCPROB178",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1431,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Greedy Problem 178. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p593",
        "name": "Greedy Problem 593",
        "platform": "leetcode",
        "code": "LC593",
        "link": "https://leetcode.com/problems/greedy-problem-593/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1484,
        "striver": false,
        "tags": [
          "queue",
          "arrays",
          "trees"
        ],
        "description": "Solve Greedy Problem 593. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "arrays"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p527",
        "name": "Greedy Problem 527",
        "platform": "codechef",
        "code": "CCPROB527",
        "link": "https://www.codechef.com/problems/CCPROB527",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1500,
        "striver": false,
        "tags": [
          "stack",
          "math",
          "bfs"
        ],
        "description": "Solve Greedy Problem 527. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "math"
        ],
        "companies": [
          "apple",
          "microsoft"
        ]
      },
      {
        "id": "p594",
        "name": "Greedy Problem 594",
        "platform": "codeforces",
        "code": "CF1288D",
        "link": "https://codeforces.com/problemset/problem/1288/D",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1515,
        "striver": false,
        "tags": [
          "heap",
          "greedy",
          "graphs"
        ],
        "description": "Solve Greedy Problem 594. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "greedy"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p680",
        "name": "Greedy Problem 680",
        "platform": "leetcode",
        "code": "LC680",
        "link": "https://leetcode.com/problems/greedy-problem-680/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1586,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Greedy Problem 680. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p152",
        "name": "Greedy Problem 152",
        "platform": "leetcode",
        "code": "LC152",
        "link": "https://leetcode.com/problems/greedy-problem-152/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1625,
        "striver": true,
        "tags": [
          "queue",
          "hashmap"
        ],
        "description": "Solve Greedy Problem 152. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p555",
        "name": "Greedy Problem 555",
        "platform": "codeforces",
        "code": "CF668H",
        "link": "https://codeforces.com/problemset/problem/668/H",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1639,
        "striver": false,
        "tags": [
          "graphs",
          "trees",
          "greedy"
        ],
        "description": "Solve Greedy Problem 555. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "trees"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p385",
        "name": "Greedy Problem 385",
        "platform": "codechef",
        "code": "CCPROB385",
        "link": "https://www.codechef.com/problems/CCPROB385",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1648,
        "striver": true,
        "tags": [
          "queue",
          "recursion",
          "stack"
        ],
        "description": "Solve Greedy Problem 385. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "recursion"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p089",
        "name": "Greedy Problem 89",
        "platform": "leetcode",
        "code": "LC89",
        "link": "https://leetcode.com/problems/greedy-problem-89/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1666,
        "striver": true,
        "tags": [
          "stack",
          "dfs"
        ],
        "description": "Solve Greedy Problem 89. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p614",
        "name": "Greedy Problem 614",
        "platform": "leetcode",
        "code": "LC614",
        "link": "https://leetcode.com/problems/greedy-problem-614/",
        "topic": "greedy",
        "difficulty": "medium",
        "rating": 1694,
        "striver": false,
        "tags": [
          "math",
          "stack"
        ],
        "description": "Solve Greedy Problem 614. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "math",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p524",
        "name": "Greedy Problem 524",
        "platform": "leetcode",
        "code": "LC524",
        "link": "https://leetcode.com/problems/greedy-problem-524/",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 1840,
        "striver": false,
        "tags": [
          "math",
          "bit-manipulation"
        ],
        "description": "Solve Greedy Problem 524. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "math",
          "bit-manipulation"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      },
      {
        "id": "p020",
        "name": "Greedy Problem 20",
        "platform": "codeforces",
        "code": "CF1530B",
        "link": "https://codeforces.com/problemset/problem/1530/B",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 1937,
        "striver": true,
        "tags": [
          "greedy"
        ],
        "description": "Solve Greedy Problem 20. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p289",
        "name": "Greedy Problem 289",
        "platform": "codechef",
        "code": "CCPROB289",
        "link": "https://www.codechef.com/problems/CCPROB289",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 1952,
        "striver": true,
        "tags": [
          "dfs",
          "dp",
          "bfs"
        ],
        "description": "Solve Greedy Problem 289. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "dp"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p596",
        "name": "Greedy Problem 596",
        "platform": "codechef",
        "code": "CCPROB596",
        "link": "https://www.codechef.com/problems/CCPROB596",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 2018,
        "striver": false,
        "tags": [
          "queue",
          "greedy",
          "two-pointers"
        ],
        "description": "Solve Greedy Problem 596. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p027",
        "name": "Greedy Problem 27",
        "platform": "codeforces",
        "code": "CF1485H",
        "link": "https://codeforces.com/problemset/problem/1485/H",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 2066,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Greedy Problem 27. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p316",
        "name": "Greedy Problem 316",
        "platform": "leetcode",
        "code": "LC316",
        "link": "https://leetcode.com/problems/greedy-problem-316/",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 2111,
        "striver": true,
        "tags": [
          "binary-search",
          "trees"
        ],
        "description": "Solve Greedy Problem 316. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p303",
        "name": "Greedy Problem 303",
        "platform": "codechef",
        "code": "CCPROB303",
        "link": "https://www.codechef.com/problems/CCPROB303",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 2116,
        "striver": true,
        "tags": [
          "stack",
          "bit-manipulation"
        ],
        "description": "Solve Greedy Problem 303. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "bit-manipulation"
        ],
        "companies": [
          "adobe",
          "netflix"
        ]
      },
      {
        "id": "p433",
        "name": "Greedy Problem 433",
        "platform": "codeforces",
        "code": "CF54B",
        "link": "https://codeforces.com/problemset/problem/54/B",
        "topic": "greedy",
        "difficulty": "hard",
        "rating": 2319,
        "striver": true,
        "tags": [
          "dp",
          "greedy",
          "queue"
        ],
        "description": "Solve Greedy Problem 433. Apply core greedy concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "greedy"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "binary-tree",
    "name": "Binary Trees",
    "icon": "🌳",
    "color": "#00e676",
    "problems": [
      {
        "id": "p704",
        "name": "Binary-Tree Problem 704",
        "platform": "codeforces",
        "code": "CF1847C",
        "link": "https://codeforces.com/problemset/problem/1847/C",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 802,
        "striver": false,
        "tags": [
          "graphs",
          "stack"
        ],
        "description": "Solve Binary-Tree Problem 704. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "stack"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p068",
        "name": "Binary-Tree Problem 68",
        "platform": "codeforces",
        "code": "CF713F",
        "link": "https://codeforces.com/problemset/problem/713/F",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 812,
        "striver": true,
        "tags": [
          "dp"
        ],
        "description": "Solve Binary-Tree Problem 68. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p723",
        "name": "Binary-Tree Problem 723",
        "platform": "leetcode",
        "code": "LC723",
        "link": "https://leetcode.com/problems/binary-tree-problem-723/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 819,
        "striver": false,
        "tags": [
          "trees",
          "recursion"
        ],
        "description": "Solve Binary-Tree Problem 723. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p522",
        "name": "Binary-Tree Problem 522",
        "platform": "codeforces",
        "code": "CF806B",
        "link": "https://codeforces.com/problemset/problem/806/B",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 830,
        "striver": false,
        "tags": [
          "dfs",
          "recursion",
          "heap"
        ],
        "description": "Solve Binary-Tree Problem 522. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "recursion"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p130",
        "name": "Binary-Tree Problem 130",
        "platform": "codeforces",
        "code": "CF1668F",
        "link": "https://codeforces.com/problemset/problem/1668/F",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 842,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Binary-Tree Problem 130. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "apple",
          "uber"
        ]
      },
      {
        "id": "p640",
        "name": "Binary-Tree Problem 640",
        "platform": "leetcode",
        "code": "LC640",
        "link": "https://leetcode.com/problems/binary-tree-problem-640/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 859,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Binary-Tree Problem 640. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p073",
        "name": "Binary-Tree Problem 73",
        "platform": "leetcode",
        "code": "LC73",
        "link": "https://leetcode.com/problems/binary-tree-problem-73/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 877,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "arrays"
        ],
        "description": "Solve Binary-Tree Problem 73. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "arrays"
        ],
        "companies": [
          "uber",
          "microsoft"
        ]
      },
      {
        "id": "p357",
        "name": "Binary-Tree Problem 357",
        "platform": "codeforces",
        "code": "CF991C",
        "link": "https://codeforces.com/problemset/problem/991/C",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 885,
        "striver": true,
        "tags": [
          "trees",
          "queue"
        ],
        "description": "Solve Binary-Tree Problem 357. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "queue"
        ],
        "companies": [
          "adobe",
          "apple"
        ]
      },
      {
        "id": "p724",
        "name": "Binary-Tree Problem 724",
        "platform": "codeforces",
        "code": "CF1137E",
        "link": "https://codeforces.com/problemset/problem/1137/E",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 910,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Binary-Tree Problem 724. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p576",
        "name": "Binary-Tree Problem 576",
        "platform": "leetcode",
        "code": "LC576",
        "link": "https://leetcode.com/problems/binary-tree-problem-576/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 913,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Binary-Tree Problem 576. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p261",
        "name": "Binary-Tree Problem 261",
        "platform": "codechef",
        "code": "CCPROB261",
        "link": "https://www.codechef.com/problems/CCPROB261",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 926,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Binary-Tree Problem 261. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p484",
        "name": "Binary-Tree Problem 484",
        "platform": "codechef",
        "code": "CCPROB484",
        "link": "https://www.codechef.com/problems/CCPROB484",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 969,
        "striver": false,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Binary-Tree Problem 484. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p676",
        "name": "Binary-Tree Problem 676",
        "platform": "leetcode",
        "code": "LC676",
        "link": "https://leetcode.com/problems/binary-tree-problem-676/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 985,
        "striver": false,
        "tags": [
          "recursion",
          "heap",
          "greedy"
        ],
        "description": "Solve Binary-Tree Problem 676. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "heap"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p562",
        "name": "Binary-Tree Problem 562",
        "platform": "codeforces",
        "code": "CF1259F",
        "link": "https://codeforces.com/problemset/problem/1259/F",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 987,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Binary-Tree Problem 562. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p058",
        "name": "Binary-Tree Problem 58",
        "platform": "codechef",
        "code": "CCPROB58",
        "link": "https://www.codechef.com/problems/CCPROB58",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 1022,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Binary-Tree Problem 58. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": []
      },
      {
        "id": "p082",
        "name": "Binary-Tree Problem 82",
        "platform": "leetcode",
        "code": "LC82",
        "link": "https://leetcode.com/problems/binary-tree-problem-82/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 1033,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "hashmap"
        ],
        "description": "Solve Binary-Tree Problem 82. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "hashmap"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p552",
        "name": "Binary-Tree Problem 552",
        "platform": "leetcode",
        "code": "LC552",
        "link": "https://leetcode.com/problems/binary-tree-problem-552/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 1036,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Binary-Tree Problem 552. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "netflix",
          "microsoft"
        ]
      },
      {
        "id": "p513",
        "name": "Binary-Tree Problem 513",
        "platform": "codeforces",
        "code": "CF1031C",
        "link": "https://codeforces.com/problemset/problem/1031/C",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 1060,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Binary-Tree Problem 513. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p360",
        "name": "Binary-Tree Problem 360",
        "platform": "codechef",
        "code": "CCPROB360",
        "link": "https://www.codechef.com/problems/CCPROB360",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 1065,
        "striver": true,
        "tags": [
          "stack"
        ],
        "description": "Solve Binary-Tree Problem 360. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p313",
        "name": "Binary-Tree Problem 313",
        "platform": "leetcode",
        "code": "LC313",
        "link": "https://leetcode.com/problems/binary-tree-problem-313/",
        "topic": "binary-tree",
        "difficulty": "easy",
        "rating": 1072,
        "striver": true,
        "tags": [
          "graphs",
          "arrays"
        ],
        "description": "Solve Binary-Tree Problem 313. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "arrays"
        ],
        "companies": [
          "meta",
          "google"
        ]
      },
      {
        "id": "p488",
        "name": "Binary-Tree Problem 488",
        "platform": "codeforces",
        "code": "CF1494A",
        "link": "https://codeforces.com/problemset/problem/1494/A",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1243,
        "striver": false,
        "tags": [
          "math",
          "dfs"
        ],
        "description": "Solve Binary-Tree Problem 488. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p740",
        "name": "Binary-Tree Problem 740",
        "platform": "leetcode",
        "code": "LC740",
        "link": "https://leetcode.com/problems/binary-tree-problem-740/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1262,
        "striver": false,
        "tags": [
          "queue",
          "arrays",
          "dp"
        ],
        "description": "Solve Binary-Tree Problem 740. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "arrays"
        ],
        "companies": []
      },
      {
        "id": "p530",
        "name": "Binary-Tree Problem 530",
        "platform": "codechef",
        "code": "CCPROB530",
        "link": "https://www.codechef.com/problems/CCPROB530",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1278,
        "striver": false,
        "tags": [
          "hashmap",
          "arrays",
          "bfs"
        ],
        "description": "Solve Binary-Tree Problem 530. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "arrays"
        ],
        "companies": [
          "microsoft",
          "uber"
        ]
      },
      {
        "id": "p745",
        "name": "Binary-Tree Problem 745",
        "platform": "codeforces",
        "code": "CF1106A",
        "link": "https://codeforces.com/problemset/problem/1106/A",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1312,
        "striver": false,
        "tags": [
          "strings"
        ],
        "description": "Solve Binary-Tree Problem 745. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "netflix",
          "adobe"
        ]
      },
      {
        "id": "p009",
        "name": "Binary-Tree Problem 9",
        "platform": "codeforces",
        "code": "CF553F",
        "link": "https://codeforces.com/problemset/problem/553/F",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1398,
        "striver": true,
        "tags": [
          "trees",
          "recursion"
        ],
        "description": "Solve Binary-Tree Problem 9. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p334",
        "name": "Binary-Tree Problem 334",
        "platform": "codeforces",
        "code": "CF1216C",
        "link": "https://codeforces.com/problemset/problem/1216/C",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1480,
        "striver": true,
        "tags": [
          "strings",
          "math"
        ],
        "description": "Solve Binary-Tree Problem 334. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p388",
        "name": "Binary-Tree Problem 388",
        "platform": "leetcode",
        "code": "LC388",
        "link": "https://leetcode.com/problems/binary-tree-problem-388/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1523,
        "striver": true,
        "tags": [
          "heap",
          "bit-manipulation"
        ],
        "description": "Solve Binary-Tree Problem 388. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p013",
        "name": "Binary-Tree Problem 13",
        "platform": "leetcode",
        "code": "LC13",
        "link": "https://leetcode.com/problems/binary-tree-problem-13/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1532,
        "striver": true,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Binary-Tree Problem 13. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p682",
        "name": "Binary-Tree Problem 682",
        "platform": "leetcode",
        "code": "LC682",
        "link": "https://leetcode.com/problems/binary-tree-problem-682/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1592,
        "striver": false,
        "tags": [
          "hashmap",
          "greedy",
          "strings"
        ],
        "description": "Solve Binary-Tree Problem 682. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p504",
        "name": "Binary-Tree Problem 504",
        "platform": "leetcode",
        "code": "LC504",
        "link": "https://leetcode.com/problems/binary-tree-problem-504/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1595,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Binary-Tree Problem 504. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "amazon",
          "adobe"
        ]
      },
      {
        "id": "p300",
        "name": "Binary-Tree Problem 300",
        "platform": "leetcode",
        "code": "LC300",
        "link": "https://leetcode.com/problems/binary-tree-problem-300/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1608,
        "striver": true,
        "tags": [
          "stack",
          "dp",
          "queue"
        ],
        "description": "Solve Binary-Tree Problem 300. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p689",
        "name": "Binary-Tree Problem 689",
        "platform": "leetcode",
        "code": "LC689",
        "link": "https://leetcode.com/problems/binary-tree-problem-689/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1639,
        "striver": false,
        "tags": [
          "hashmap",
          "recursion",
          "bfs"
        ],
        "description": "Solve Binary-Tree Problem 689. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "recursion"
        ],
        "companies": [
          "amazon",
          "adobe"
        ]
      },
      {
        "id": "p658",
        "name": "Binary-Tree Problem 658",
        "platform": "leetcode",
        "code": "LC658",
        "link": "https://leetcode.com/problems/binary-tree-problem-658/",
        "topic": "binary-tree",
        "difficulty": "medium",
        "rating": 1690,
        "striver": false,
        "tags": [
          "bfs",
          "stack",
          "math"
        ],
        "description": "Solve Binary-Tree Problem 658. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p361",
        "name": "Binary-Tree Problem 361",
        "platform": "codeforces",
        "code": "CF1830G",
        "link": "https://codeforces.com/problemset/problem/1830/G",
        "topic": "binary-tree",
        "difficulty": "hard",
        "rating": 1919,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Binary-Tree Problem 361. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p564",
        "name": "Binary-Tree Problem 564",
        "platform": "leetcode",
        "code": "LC564",
        "link": "https://leetcode.com/problems/binary-tree-problem-564/",
        "topic": "binary-tree",
        "difficulty": "hard",
        "rating": 2028,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Binary-Tree Problem 564. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "microsoft",
          "google"
        ]
      },
      {
        "id": "p621",
        "name": "Binary-Tree Problem 621",
        "platform": "codechef",
        "code": "CCPROB621",
        "link": "https://www.codechef.com/problems/CCPROB621",
        "topic": "binary-tree",
        "difficulty": "hard",
        "rating": 2103,
        "striver": false,
        "tags": [
          "stack",
          "binary-search"
        ],
        "description": "Solve Binary-Tree Problem 621. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p537",
        "name": "Binary-Tree Problem 537",
        "platform": "leetcode",
        "code": "LC537",
        "link": "https://leetcode.com/problems/binary-tree-problem-537/",
        "topic": "binary-tree",
        "difficulty": "hard",
        "rating": 2170,
        "striver": false,
        "tags": [
          "dp"
        ],
        "description": "Solve Binary-Tree Problem 537. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p293",
        "name": "Binary-Tree Problem 293",
        "platform": "leetcode",
        "code": "LC293",
        "link": "https://leetcode.com/problems/binary-tree-problem-293/",
        "topic": "binary-tree",
        "difficulty": "hard",
        "rating": 2357,
        "striver": true,
        "tags": [
          "trees"
        ],
        "description": "Solve Binary-Tree Problem 293. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "meta",
          "adobe"
        ]
      },
      {
        "id": "p188",
        "name": "Binary-Tree Problem 188",
        "platform": "codeforces",
        "code": "CF552G",
        "link": "https://codeforces.com/problemset/problem/552/G",
        "topic": "binary-tree",
        "difficulty": "hard",
        "rating": 2396,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "two-pointers"
        ],
        "description": "Solve Binary-Tree Problem 188. Apply core binary-tree concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "two-pointers"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "bst",
    "name": "Binary Search Trees",
    "icon": "🌲",
    "color": "#1de9b6",
    "problems": [
      {
        "id": "p692",
        "name": "Bst Problem 692",
        "platform": "codeforces",
        "code": "CF996F",
        "link": "https://codeforces.com/problemset/problem/996/F",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 889,
        "striver": false,
        "tags": [
          "math",
          "heap"
        ],
        "description": "Solve Bst Problem 692. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p363",
        "name": "Bst Problem 363",
        "platform": "codeforces",
        "code": "CF1109H",
        "link": "https://codeforces.com/problemset/problem/1109/H",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 917,
        "striver": true,
        "tags": [
          "dfs",
          "greedy"
        ],
        "description": "Solve Bst Problem 363. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "greedy"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p236",
        "name": "Bst Problem 236",
        "platform": "leetcode",
        "code": "LC236",
        "link": "https://leetcode.com/problems/bst-problem-236/",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 920,
        "striver": true,
        "tags": [
          "dp",
          "two-pointers",
          "hashmap"
        ],
        "description": "Solve Bst Problem 236. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "two-pointers"
        ],
        "companies": []
      },
      {
        "id": "p638",
        "name": "Bst Problem 638",
        "platform": "codechef",
        "code": "CCPROB638",
        "link": "https://www.codechef.com/problems/CCPROB638",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 923,
        "striver": false,
        "tags": [
          "two-pointers",
          "bfs",
          "trees"
        ],
        "description": "Solve Bst Problem 638. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p143",
        "name": "Bst Problem 143",
        "platform": "leetcode",
        "code": "LC143",
        "link": "https://leetcode.com/problems/bst-problem-143/",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 928,
        "striver": true,
        "tags": [
          "math",
          "heap",
          "stack"
        ],
        "description": "Solve Bst Problem 143. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "math",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p317",
        "name": "Bst Problem 317",
        "platform": "codechef",
        "code": "CCPROB317",
        "link": "https://www.codechef.com/problems/CCPROB317",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 930,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Bst Problem 317. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p623",
        "name": "Bst Problem 623",
        "platform": "leetcode",
        "code": "LC623",
        "link": "https://leetcode.com/problems/bst-problem-623/",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 965,
        "striver": false,
        "tags": [
          "bit-manipulation"
        ],
        "description": "Solve Bst Problem 623. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p454",
        "name": "Bst Problem 454",
        "platform": "leetcode",
        "code": "LC454",
        "link": "https://leetcode.com/problems/bst-problem-454/",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 970,
        "striver": true,
        "tags": [
          "two-pointers",
          "heap"
        ],
        "description": "Solve Bst Problem 454. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "heap"
        ],
        "companies": [
          "netflix",
          "amazon"
        ]
      },
      {
        "id": "p076",
        "name": "Bst Problem 76",
        "platform": "codeforces",
        "code": "CF1758G",
        "link": "https://codeforces.com/problemset/problem/1758/G",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 1048,
        "striver": true,
        "tags": [
          "binary-search",
          "two-pointers",
          "stack"
        ],
        "description": "Solve Bst Problem 76. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "two-pointers"
        ],
        "companies": [
          "uber",
          "amazon"
        ]
      },
      {
        "id": "p252",
        "name": "Bst Problem 252",
        "platform": "codeforces",
        "code": "CF1726G",
        "link": "https://codeforces.com/problemset/problem/1726/G",
        "topic": "bst",
        "difficulty": "easy",
        "rating": 1069,
        "striver": true,
        "tags": [
          "heap",
          "stack",
          "greedy"
        ],
        "description": "Solve Bst Problem 252. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "stack"
        ],
        "companies": [
          "uber",
          "adobe"
        ]
      },
      {
        "id": "p338",
        "name": "Bst Problem 338",
        "platform": "leetcode",
        "code": "LC338",
        "link": "https://leetcode.com/problems/bst-problem-338/",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1208,
        "striver": true,
        "tags": [
          "arrays"
        ],
        "description": "Solve Bst Problem 338. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "apple",
          "amazon"
        ]
      },
      {
        "id": "p479",
        "name": "Bst Problem 479",
        "platform": "codechef",
        "code": "CCPROB479",
        "link": "https://www.codechef.com/problems/CCPROB479",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1332,
        "striver": false,
        "tags": [
          "hashmap",
          "greedy",
          "bit-manipulation"
        ],
        "description": "Solve Bst Problem 479. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "greedy"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p486",
        "name": "Bst Problem 486",
        "platform": "leetcode",
        "code": "LC486",
        "link": "https://leetcode.com/problems/bst-problem-486/",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1391,
        "striver": false,
        "tags": [
          "dp",
          "binary-search"
        ],
        "description": "Solve Bst Problem 486. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p350",
        "name": "Bst Problem 350",
        "platform": "codeforces",
        "code": "CF676A",
        "link": "https://codeforces.com/problemset/problem/676/A",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1409,
        "striver": true,
        "tags": [
          "dfs",
          "hashmap"
        ],
        "description": "Solve Bst Problem 350. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "hashmap"
        ],
        "companies": [
          "netflix",
          "google"
        ]
      },
      {
        "id": "p111",
        "name": "Bst Problem 111",
        "platform": "codeforces",
        "code": "CF149C",
        "link": "https://codeforces.com/problemset/problem/149/C",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1423,
        "striver": true,
        "tags": [
          "trees",
          "stack"
        ],
        "description": "Solve Bst Problem 111. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p478",
        "name": "Bst Problem 478",
        "platform": "leetcode",
        "code": "LC478",
        "link": "https://leetcode.com/problems/bst-problem-478/",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1426,
        "striver": false,
        "tags": [
          "recursion"
        ],
        "description": "Solve Bst Problem 478. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p497",
        "name": "Bst Problem 497",
        "platform": "leetcode",
        "code": "LC497",
        "link": "https://leetcode.com/problems/bst-problem-497/",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1463,
        "striver": false,
        "tags": [
          "arrays"
        ],
        "description": "Solve Bst Problem 497. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p065",
        "name": "Bst Problem 65",
        "platform": "codechef",
        "code": "CCPROB65",
        "link": "https://www.codechef.com/problems/CCPROB65",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1518,
        "striver": true,
        "tags": [
          "heap",
          "bit-manipulation"
        ],
        "description": "Solve Bst Problem 65. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "bit-manipulation"
        ],
        "companies": []
      },
      {
        "id": "p172",
        "name": "Bst Problem 172",
        "platform": "codeforces",
        "code": "CF255G",
        "link": "https://codeforces.com/problemset/problem/255/G",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1518,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Bst Problem 172. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p003",
        "name": "Bst Problem 3",
        "platform": "codechef",
        "code": "CCPROB3",
        "link": "https://www.codechef.com/problems/CCPROB3",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1521,
        "striver": true,
        "tags": [
          "trees",
          "bit-manipulation"
        ],
        "description": "Solve Bst Problem 3. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "bit-manipulation"
        ],
        "companies": [
          "amazon",
          "apple"
        ]
      },
      {
        "id": "p099",
        "name": "Bst Problem 99",
        "platform": "codeforces",
        "code": "CF610C",
        "link": "https://codeforces.com/problemset/problem/610/C",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1585,
        "striver": true,
        "tags": [
          "stack",
          "trees",
          "hashmap"
        ],
        "description": "Solve Bst Problem 99. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "trees"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p408",
        "name": "Bst Problem 408",
        "platform": "leetcode",
        "code": "LC408",
        "link": "https://leetcode.com/problems/bst-problem-408/",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1599,
        "striver": true,
        "tags": [
          "bfs",
          "stack",
          "greedy"
        ],
        "description": "Solve Bst Problem 408. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p539",
        "name": "Bst Problem 539",
        "platform": "codeforces",
        "code": "CF237C",
        "link": "https://codeforces.com/problemset/problem/237/C",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1612,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "stack",
          "binary-search"
        ],
        "description": "Solve Bst Problem 539. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "stack"
        ],
        "companies": [
          "google",
          "amazon"
        ]
      },
      {
        "id": "p148",
        "name": "Bst Problem 148",
        "platform": "leetcode",
        "code": "LC148",
        "link": "https://leetcode.com/problems/bst-problem-148/",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1638,
        "striver": true,
        "tags": [
          "binary-search",
          "hashmap"
        ],
        "description": "Solve Bst Problem 148. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p523",
        "name": "Bst Problem 523",
        "platform": "codeforces",
        "code": "CF59G",
        "link": "https://codeforces.com/problemset/problem/59/G",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1640,
        "striver": false,
        "tags": [
          "trees"
        ],
        "description": "Solve Bst Problem 523. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "trees"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p741",
        "name": "Bst Problem 741",
        "platform": "codeforces",
        "code": "CF1273A",
        "link": "https://codeforces.com/problemset/problem/1273/A",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1655,
        "striver": false,
        "tags": [
          "arrays"
        ],
        "description": "Solve Bst Problem 741. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "arrays"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p274",
        "name": "Bst Problem 274",
        "platform": "codeforces",
        "code": "CF371C",
        "link": "https://codeforces.com/problemset/problem/371/C",
        "topic": "bst",
        "difficulty": "medium",
        "rating": 1663,
        "striver": true,
        "tags": [
          "heap",
          "trees",
          "two-pointers"
        ],
        "description": "Solve Bst Problem 274. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "trees"
        ],
        "companies": [
          "netflix",
          "adobe"
        ]
      },
      {
        "id": "p464",
        "name": "Bst Problem 464",
        "platform": "leetcode",
        "code": "LC464",
        "link": "https://leetcode.com/problems/bst-problem-464/",
        "topic": "bst",
        "difficulty": "hard",
        "rating": 2335,
        "striver": false,
        "tags": [
          "queue",
          "dfs"
        ],
        "description": "Solve Bst Problem 464. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "dfs"
        ],
        "companies": [
          "netflix",
          "amazon"
        ]
      },
      {
        "id": "p711",
        "name": "Bst Problem 711",
        "platform": "leetcode",
        "code": "LC711",
        "link": "https://leetcode.com/problems/bst-problem-711/",
        "topic": "bst",
        "difficulty": "hard",
        "rating": 2348,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Bst Problem 711. Apply core bst concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "graphs",
    "name": "Graphs",
    "icon": "🕸️",
    "color": "#18ffff",
    "problems": [
      {
        "id": "p411",
        "name": "Graphs Problem 411",
        "platform": "leetcode",
        "code": "LC411",
        "link": "https://leetcode.com/problems/graphs-problem-411/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 807,
        "striver": true,
        "tags": [
          "hashmap",
          "math"
        ],
        "description": "Solve Graphs Problem 411. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "math"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p023",
        "name": "Graphs Problem 23",
        "platform": "leetcode",
        "code": "LC23",
        "link": "https://leetcode.com/problems/graphs-problem-23/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 819,
        "striver": true,
        "tags": [
          "recursion",
          "dfs"
        ],
        "description": "Solve Graphs Problem 23. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "dfs"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p347",
        "name": "Graphs Problem 347",
        "platform": "codeforces",
        "code": "CF1528F",
        "link": "https://codeforces.com/problemset/problem/1528/F",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 874,
        "striver": true,
        "tags": [
          "trees",
          "math",
          "strings"
        ],
        "description": "Solve Graphs Problem 347. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "math"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p002",
        "name": "Graphs Problem 2",
        "platform": "codeforces",
        "code": "CF1121A",
        "link": "https://codeforces.com/problemset/problem/1121/A",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 895,
        "striver": true,
        "tags": [
          "hashmap",
          "graphs"
        ],
        "description": "Solve Graphs Problem 2. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "graphs"
        ],
        "companies": [
          "uber",
          "apple"
        ]
      },
      {
        "id": "p404",
        "name": "Graphs Problem 404",
        "platform": "leetcode",
        "code": "LC404",
        "link": "https://leetcode.com/problems/graphs-problem-404/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 924,
        "striver": true,
        "tags": [
          "bfs",
          "hashmap",
          "trees"
        ],
        "description": "Solve Graphs Problem 404. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "hashmap"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p222",
        "name": "Graphs Problem 222",
        "platform": "codeforces",
        "code": "CF1803D",
        "link": "https://codeforces.com/problemset/problem/1803/D",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 953,
        "striver": true,
        "tags": [
          "queue",
          "binary-search",
          "graphs"
        ],
        "description": "Solve Graphs Problem 222. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p268",
        "name": "Graphs Problem 268",
        "platform": "codeforces",
        "code": "CF346E",
        "link": "https://codeforces.com/problemset/problem/346/E",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 955,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Graphs Problem 268. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p639",
        "name": "Graphs Problem 639",
        "platform": "codechef",
        "code": "CCPROB639",
        "link": "https://www.codechef.com/problems/CCPROB639",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 995,
        "striver": false,
        "tags": [
          "bit-manipulation",
          "stack"
        ],
        "description": "Solve Graphs Problem 639. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "stack"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p708",
        "name": "Graphs Problem 708",
        "platform": "codeforces",
        "code": "CF807D",
        "link": "https://codeforces.com/problemset/problem/807/D",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 1016,
        "striver": false,
        "tags": [
          "bfs",
          "binary-search",
          "bit-manipulation"
        ],
        "description": "Solve Graphs Problem 708. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "binary-search"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p154",
        "name": "Graphs Problem 154",
        "platform": "leetcode",
        "code": "LC154",
        "link": "https://leetcode.com/problems/graphs-problem-154/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 1024,
        "striver": true,
        "tags": [
          "graphs",
          "greedy"
        ],
        "description": "Solve Graphs Problem 154. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "greedy"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p024",
        "name": "Graphs Problem 24",
        "platform": "leetcode",
        "code": "LC24",
        "link": "https://leetcode.com/problems/graphs-problem-24/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 1048,
        "striver": true,
        "tags": [
          "stack",
          "strings",
          "recursion"
        ],
        "description": "Solve Graphs Problem 24. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "strings"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p417",
        "name": "Graphs Problem 417",
        "platform": "leetcode",
        "code": "LC417",
        "link": "https://leetcode.com/problems/graphs-problem-417/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 1066,
        "striver": true,
        "tags": [
          "bfs",
          "two-pointers",
          "greedy"
        ],
        "description": "Solve Graphs Problem 417. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "two-pointers"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p399",
        "name": "Graphs Problem 399",
        "platform": "leetcode",
        "code": "LC399",
        "link": "https://leetcode.com/problems/graphs-problem-399/",
        "topic": "graphs",
        "difficulty": "easy",
        "rating": 1095,
        "striver": true,
        "tags": [
          "strings",
          "dp"
        ],
        "description": "Solve Graphs Problem 399. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p519",
        "name": "Graphs Problem 519",
        "platform": "leetcode",
        "code": "LC519",
        "link": "https://leetcode.com/problems/graphs-problem-519/",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1248,
        "striver": false,
        "tags": [
          "queue",
          "dfs",
          "greedy"
        ],
        "description": "Solve Graphs Problem 519. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "dfs"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p457",
        "name": "Graphs Problem 457",
        "platform": "leetcode",
        "code": "LC457",
        "link": "https://leetcode.com/problems/graphs-problem-457/",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1250,
        "striver": false,
        "tags": [
          "two-pointers",
          "graphs"
        ],
        "description": "Solve Graphs Problem 457. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "graphs"
        ],
        "companies": []
      },
      {
        "id": "p510",
        "name": "Graphs Problem 510",
        "platform": "codeforces",
        "code": "CF1565F",
        "link": "https://codeforces.com/problemset/problem/1565/F",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1275,
        "striver": false,
        "tags": [
          "dp",
          "greedy"
        ],
        "description": "Solve Graphs Problem 510. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "greedy"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p134",
        "name": "Graphs Problem 134",
        "platform": "codechef",
        "code": "CCPROB134",
        "link": "https://www.codechef.com/problems/CCPROB134",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1300,
        "striver": true,
        "tags": [
          "stack",
          "arrays",
          "hashmap"
        ],
        "description": "Solve Graphs Problem 134. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "arrays"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p369",
        "name": "Graphs Problem 369",
        "platform": "codeforces",
        "code": "CF403F",
        "link": "https://codeforces.com/problemset/problem/403/F",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1377,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Graphs Problem 369. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "microsoft",
          "adobe"
        ]
      },
      {
        "id": "p400",
        "name": "Graphs Problem 400",
        "platform": "codeforces",
        "code": "CF1661H",
        "link": "https://codeforces.com/problemset/problem/1661/H",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1483,
        "striver": true,
        "tags": [
          "recursion"
        ],
        "description": "Solve Graphs Problem 400. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "recursion"
        ],
        "companies": [
          "google",
          "microsoft"
        ]
      },
      {
        "id": "p123",
        "name": "Graphs Problem 123",
        "platform": "codeforces",
        "code": "CF1347B",
        "link": "https://codeforces.com/problemset/problem/1347/B",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1489,
        "striver": true,
        "tags": [
          "trees",
          "dfs",
          "queue"
        ],
        "description": "Solve Graphs Problem 123. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p071",
        "name": "Graphs Problem 71",
        "platform": "leetcode",
        "code": "LC71",
        "link": "https://leetcode.com/problems/graphs-problem-71/",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1572,
        "striver": true,
        "tags": [
          "trees",
          "arrays",
          "recursion"
        ],
        "description": "Solve Graphs Problem 71. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "arrays"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p219",
        "name": "Graphs Problem 219",
        "platform": "leetcode",
        "code": "LC219",
        "link": "https://leetcode.com/problems/graphs-problem-219/",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1630,
        "striver": true,
        "tags": [
          "dp",
          "trees",
          "graphs"
        ],
        "description": "Solve Graphs Problem 219. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "trees"
        ],
        "companies": [
          "adobe"
        ]
      },
      {
        "id": "p671",
        "name": "Graphs Problem 671",
        "platform": "leetcode",
        "code": "LC671",
        "link": "https://leetcode.com/problems/graphs-problem-671/",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1638,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Graphs Problem 671. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "google",
          "apple"
        ]
      },
      {
        "id": "p535",
        "name": "Graphs Problem 535",
        "platform": "leetcode",
        "code": "LC535",
        "link": "https://leetcode.com/problems/graphs-problem-535/",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1652,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Graphs Problem 535. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": [
          "meta",
          "adobe"
        ]
      },
      {
        "id": "p736",
        "name": "Graphs Problem 736",
        "platform": "codeforces",
        "code": "CF840C",
        "link": "https://codeforces.com/problemset/problem/840/C",
        "topic": "graphs",
        "difficulty": "medium",
        "rating": 1686,
        "striver": false,
        "tags": [
          "greedy",
          "arrays"
        ],
        "description": "Solve Graphs Problem 736. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "arrays"
        ],
        "companies": [
          "amazon",
          "apple"
        ]
      },
      {
        "id": "p306",
        "name": "Graphs Problem 306",
        "platform": "leetcode",
        "code": "LC306",
        "link": "https://leetcode.com/problems/graphs-problem-306/",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 1880,
        "striver": true,
        "tags": [
          "two-pointers",
          "recursion"
        ],
        "description": "Solve Graphs Problem 306. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "recursion"
        ],
        "companies": []
      },
      {
        "id": "p647",
        "name": "Graphs Problem 647",
        "platform": "codechef",
        "code": "CCPROB647",
        "link": "https://www.codechef.com/problems/CCPROB647",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 1921,
        "striver": false,
        "tags": [
          "queue",
          "arrays",
          "hashmap"
        ],
        "description": "Solve Graphs Problem 647. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "arrays"
        ],
        "companies": [
          "adobe",
          "netflix"
        ]
      },
      {
        "id": "p056",
        "name": "Graphs Problem 56",
        "platform": "leetcode",
        "code": "LC56",
        "link": "https://leetcode.com/problems/graphs-problem-56/",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 1932,
        "striver": true,
        "tags": [
          "greedy"
        ],
        "description": "Solve Graphs Problem 56. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": []
      },
      {
        "id": "p247",
        "name": "Graphs Problem 247",
        "platform": "leetcode",
        "code": "LC247",
        "link": "https://leetcode.com/problems/graphs-problem-247/",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 1974,
        "striver": true,
        "tags": [
          "math",
          "stack"
        ],
        "description": "Solve Graphs Problem 247. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "math",
          "stack"
        ],
        "companies": [
          "amazon",
          "apple"
        ]
      },
      {
        "id": "p462",
        "name": "Graphs Problem 462",
        "platform": "codeforces",
        "code": "CF282C",
        "link": "https://codeforces.com/problemset/problem/282/C",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 1993,
        "striver": false,
        "tags": [
          "strings"
        ],
        "description": "Solve Graphs Problem 462. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "strings"
        ],
        "companies": [
          "meta",
          "google"
        ]
      },
      {
        "id": "p490",
        "name": "Graphs Problem 490",
        "platform": "codechef",
        "code": "CCPROB490",
        "link": "https://www.codechef.com/problems/CCPROB490",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 2324,
        "striver": false,
        "tags": [
          "hashmap"
        ],
        "description": "Solve Graphs Problem 490. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p051",
        "name": "Graphs Problem 51",
        "platform": "leetcode",
        "code": "LC51",
        "link": "https://leetcode.com/problems/graphs-problem-51/",
        "topic": "graphs",
        "difficulty": "hard",
        "rating": 2340,
        "striver": true,
        "tags": [
          "bfs",
          "arrays",
          "two-pointers"
        ],
        "description": "Solve Graphs Problem 51. Apply core graphs concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "arrays"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      }
    ]
  },
  {
    "id": "dynamic-programming",
    "name": "Dynamic Programming",
    "icon": "⚡",
    "color": "#ffab40",
    "problems": [
      {
        "id": "p501",
        "name": "Dynamic-Programming Problem 501",
        "platform": "leetcode",
        "code": "LC501",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-501/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 821,
        "striver": false,
        "tags": [
          "hashmap",
          "strings",
          "heap"
        ],
        "description": "Solve Dynamic-Programming Problem 501. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "strings"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p006",
        "name": "Dynamic-Programming Problem 6",
        "platform": "codeforces",
        "code": "CF132G",
        "link": "https://codeforces.com/problemset/problem/132/G",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 840,
        "striver": true,
        "tags": [
          "dp",
          "heap"
        ],
        "description": "Solve Dynamic-Programming Problem 6. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "heap"
        ],
        "companies": [
          "apple",
          "microsoft"
        ]
      },
      {
        "id": "p686",
        "name": "Dynamic-Programming Problem 686",
        "platform": "leetcode",
        "code": "LC686",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-686/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 848,
        "striver": false,
        "tags": [
          "greedy"
        ],
        "description": "Solve Dynamic-Programming Problem 686. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": [
          "microsoft",
          "google"
        ]
      },
      {
        "id": "p012",
        "name": "Dynamic-Programming Problem 12",
        "platform": "leetcode",
        "code": "LC12",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-12/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 851,
        "striver": true,
        "tags": [
          "dfs",
          "bit-manipulation"
        ],
        "description": "Solve Dynamic-Programming Problem 12. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "bit-manipulation"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p582",
        "name": "Dynamic-Programming Problem 582",
        "platform": "leetcode",
        "code": "LC582",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-582/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 893,
        "striver": false,
        "tags": [
          "heap"
        ],
        "description": "Solve Dynamic-Programming Problem 582. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p662",
        "name": "Dynamic-Programming Problem 662",
        "platform": "leetcode",
        "code": "LC662",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-662/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 914,
        "striver": false,
        "tags": [
          "greedy",
          "arrays"
        ],
        "description": "Solve Dynamic-Programming Problem 662. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "greedy",
          "arrays"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      },
      {
        "id": "p242",
        "name": "Dynamic-Programming Problem 242",
        "platform": "codeforces",
        "code": "CF1718E",
        "link": "https://codeforces.com/problemset/problem/1718/E",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 974,
        "striver": true,
        "tags": [
          "heap",
          "math"
        ],
        "description": "Solve Dynamic-Programming Problem 242. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "math"
        ],
        "companies": [
          "apple",
          "google"
        ]
      },
      {
        "id": "p381",
        "name": "Dynamic-Programming Problem 381",
        "platform": "leetcode",
        "code": "LC381",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-381/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 993,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "graphs",
          "math"
        ],
        "description": "Solve Dynamic-Programming Problem 381. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "graphs"
        ],
        "companies": [
          "meta",
          "google"
        ]
      },
      {
        "id": "p295",
        "name": "Dynamic-Programming Problem 295",
        "platform": "codeforces",
        "code": "CF215A",
        "link": "https://codeforces.com/problemset/problem/215/A",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1009,
        "striver": true,
        "tags": [
          "heap",
          "dp",
          "arrays"
        ],
        "description": "Solve Dynamic-Programming Problem 295. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "dp"
        ],
        "companies": []
      },
      {
        "id": "p033",
        "name": "Dynamic-Programming Problem 33",
        "platform": "codechef",
        "code": "CCPROB33",
        "link": "https://www.codechef.com/problems/CCPROB33",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1010,
        "striver": true,
        "tags": [
          "heap"
        ],
        "description": "Solve Dynamic-Programming Problem 33. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p402",
        "name": "Dynamic-Programming Problem 402",
        "platform": "leetcode",
        "code": "LC402",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-402/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1034,
        "striver": true,
        "tags": [
          "arrays",
          "bfs"
        ],
        "description": "Solve Dynamic-Programming Problem 402. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "bfs"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p163",
        "name": "Dynamic-Programming Problem 163",
        "platform": "codeforces",
        "code": "CF1182F",
        "link": "https://codeforces.com/problemset/problem/1182/F",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1049,
        "striver": true,
        "tags": [
          "dfs",
          "binary-search",
          "two-pointers"
        ],
        "description": "Solve Dynamic-Programming Problem 163. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p375",
        "name": "Dynamic-Programming Problem 375",
        "platform": "leetcode",
        "code": "LC375",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-375/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1058,
        "striver": true,
        "tags": [
          "trees",
          "queue",
          "bit-manipulation"
        ],
        "description": "Solve Dynamic-Programming Problem 375. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "trees",
          "queue"
        ],
        "companies": [
          "meta",
          "amazon"
        ]
      },
      {
        "id": "p144",
        "name": "Dynamic-Programming Problem 144",
        "platform": "codechef",
        "code": "CCPROB144",
        "link": "https://www.codechef.com/problems/CCPROB144",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1063,
        "striver": true,
        "tags": [
          "graphs"
        ],
        "description": "Solve Dynamic-Programming Problem 144. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      },
      {
        "id": "p319",
        "name": "Dynamic-Programming Problem 319",
        "platform": "codeforces",
        "code": "CF324H",
        "link": "https://codeforces.com/problemset/problem/324/H",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1068,
        "striver": true,
        "tags": [
          "bfs",
          "dfs"
        ],
        "description": "Solve Dynamic-Programming Problem 319. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p586",
        "name": "Dynamic-Programming Problem 586",
        "platform": "leetcode",
        "code": "LC586",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-586/",
        "topic": "dynamic-programming",
        "difficulty": "easy",
        "rating": 1072,
        "striver": false,
        "tags": [
          "stack",
          "heap",
          "bit-manipulation"
        ],
        "description": "Solve Dynamic-Programming Problem 586. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "heap"
        ],
        "companies": [
          "google",
          "meta"
        ]
      },
      {
        "id": "p447",
        "name": "Dynamic-Programming Problem 447",
        "platform": "codechef",
        "code": "CCPROB447",
        "link": "https://www.codechef.com/problems/CCPROB447",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1226,
        "striver": true,
        "tags": [
          "bfs"
        ],
        "description": "Solve Dynamic-Programming Problem 447. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "bfs"
        ],
        "companies": [
          "meta",
          "apple"
        ]
      },
      {
        "id": "p543",
        "name": "Dynamic-Programming Problem 543",
        "platform": "codeforces",
        "code": "CF436D",
        "link": "https://codeforces.com/problemset/problem/436/D",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1237,
        "striver": false,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Dynamic-Programming Problem 543. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "adobe",
          "google"
        ]
      },
      {
        "id": "p719",
        "name": "Dynamic-Programming Problem 719",
        "platform": "codeforces",
        "code": "CF1403B",
        "link": "https://codeforces.com/problemset/problem/1403/B",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1277,
        "striver": false,
        "tags": [
          "arrays",
          "bfs",
          "strings"
        ],
        "description": "Solve Dynamic-Programming Problem 719. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "bfs"
        ],
        "companies": [
          "amazon",
          "netflix"
        ]
      },
      {
        "id": "p318",
        "name": "Dynamic-Programming Problem 318",
        "platform": "leetcode",
        "code": "LC318",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-318/",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1298,
        "striver": true,
        "tags": [
          "strings",
          "bfs",
          "bit-manipulation"
        ],
        "description": "Solve Dynamic-Programming Problem 318. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": []
      },
      {
        "id": "p101",
        "name": "Dynamic-Programming Problem 101",
        "platform": "leetcode",
        "code": "LC101",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-101/",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1336,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "trees"
        ],
        "description": "Solve Dynamic-Programming Problem 101. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "trees"
        ],
        "companies": []
      },
      {
        "id": "p348",
        "name": "Dynamic-Programming Problem 348",
        "platform": "codeforces",
        "code": "CF450G",
        "link": "https://codeforces.com/problemset/problem/450/G",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1408,
        "striver": true,
        "tags": [
          "stack",
          "binary-search",
          "heap"
        ],
        "description": "Solve Dynamic-Programming Problem 348. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "stack",
          "binary-search"
        ],
        "companies": []
      },
      {
        "id": "p087",
        "name": "Dynamic-Programming Problem 87",
        "platform": "leetcode",
        "code": "LC87",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-87/",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1480,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Dynamic-Programming Problem 87. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p557",
        "name": "Dynamic-Programming Problem 557",
        "platform": "codechef",
        "code": "CCPROB557",
        "link": "https://www.codechef.com/problems/CCPROB557",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1531,
        "striver": false,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Dynamic-Programming Problem 557. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p019",
        "name": "Dynamic-Programming Problem 19",
        "platform": "leetcode",
        "code": "LC19",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-19/",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1533,
        "striver": true,
        "tags": [
          "arrays",
          "stack"
        ],
        "description": "Solve Dynamic-Programming Problem 19. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "stack"
        ],
        "companies": [
          "netflix",
          "apple"
        ]
      },
      {
        "id": "p063",
        "name": "Dynamic-Programming Problem 63",
        "platform": "leetcode",
        "code": "LC63",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-63/",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1579,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Dynamic-Programming Problem 63. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "microsoft",
          "apple"
        ]
      },
      {
        "id": "p138",
        "name": "Dynamic-Programming Problem 138",
        "platform": "leetcode",
        "code": "LC138",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-138/",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1599,
        "striver": true,
        "tags": [
          "recursion",
          "heap"
        ],
        "description": "Solve Dynamic-Programming Problem 138. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p413",
        "name": "Dynamic-Programming Problem 413",
        "platform": "codechef",
        "code": "CCPROB413",
        "link": "https://www.codechef.com/problems/CCPROB413",
        "topic": "dynamic-programming",
        "difficulty": "medium",
        "rating": 1698,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "stack",
          "bfs"
        ],
        "description": "Solve Dynamic-Programming Problem 413. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p389",
        "name": "Dynamic-Programming Problem 389",
        "platform": "leetcode",
        "code": "LC389",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-389/",
        "topic": "dynamic-programming",
        "difficulty": "hard",
        "rating": 1978,
        "striver": true,
        "tags": [
          "graphs",
          "stack"
        ],
        "description": "Solve Dynamic-Programming Problem 389. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "graphs",
          "stack"
        ],
        "companies": []
      },
      {
        "id": "p221",
        "name": "Dynamic-Programming Problem 221",
        "platform": "codechef",
        "code": "CCPROB221",
        "link": "https://www.codechef.com/problems/CCPROB221",
        "topic": "dynamic-programming",
        "difficulty": "hard",
        "rating": 2046,
        "striver": true,
        "tags": [
          "two-pointers"
        ],
        "description": "Solve Dynamic-Programming Problem 221. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "two-pointers"
        ],
        "companies": [
          "uber",
          "adobe"
        ]
      },
      {
        "id": "p362",
        "name": "Dynamic-Programming Problem 362",
        "platform": "leetcode",
        "code": "LC362",
        "link": "https://leetcode.com/problems/dynamic-programming-problem-362/",
        "topic": "dynamic-programming",
        "difficulty": "hard",
        "rating": 2158,
        "striver": true,
        "tags": [
          "greedy"
        ],
        "description": "Solve Dynamic-Programming Problem 362. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "greedy"
        ],
        "companies": [
          "netflix",
          "adobe"
        ]
      },
      {
        "id": "p663",
        "name": "Dynamic-Programming Problem 663",
        "platform": "codechef",
        "code": "CCPROB663",
        "link": "https://www.codechef.com/problems/CCPROB663",
        "topic": "dynamic-programming",
        "difficulty": "hard",
        "rating": 2244,
        "striver": false,
        "tags": [
          "dfs"
        ],
        "description": "Solve Dynamic-Programming Problem 663. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": []
      },
      {
        "id": "p102",
        "name": "Dynamic-Programming Problem 102",
        "platform": "codeforces",
        "code": "CF1282F",
        "link": "https://codeforces.com/problemset/problem/1282/F",
        "topic": "dynamic-programming",
        "difficulty": "hard",
        "rating": 2339,
        "striver": true,
        "tags": [
          "binary-search",
          "bfs"
        ],
        "description": "Solve Dynamic-Programming Problem 102. Apply core dynamic-programming concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "bfs"
        ],
        "companies": []
      }
    ]
  },
  {
    "id": "tries",
    "name": "Tries",
    "icon": "🔠",
    "color": "#00bfa5",
    "problems": [
      {
        "id": "p560",
        "name": "Tries Problem 560",
        "platform": "leetcode",
        "code": "LC560",
        "link": "https://leetcode.com/problems/tries-problem-560/",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 802,
        "striver": false,
        "tags": [
          "arrays",
          "dfs",
          "heap"
        ],
        "description": "Solve Tries Problem 560. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "dfs"
        ],
        "companies": [
          "google"
        ]
      },
      {
        "id": "p437",
        "name": "Tries Problem 437",
        "platform": "leetcode",
        "code": "LC437",
        "link": "https://leetcode.com/problems/tries-problem-437/",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 807,
        "striver": true,
        "tags": [
          "binary-search"
        ],
        "description": "Solve Tries Problem 437. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "binary-search"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p677",
        "name": "Tries Problem 677",
        "platform": "leetcode",
        "code": "LC677",
        "link": "https://leetcode.com/problems/tries-problem-677/",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 858,
        "striver": false,
        "tags": [
          "queue",
          "heap"
        ],
        "description": "Solve Tries Problem 677. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "heap"
        ],
        "companies": [
          "netflix",
          "meta"
        ]
      },
      {
        "id": "p304",
        "name": "Tries Problem 304",
        "platform": "codeforces",
        "code": "CF1867B",
        "link": "https://codeforces.com/problemset/problem/1867/B",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 868,
        "striver": true,
        "tags": [
          "dfs",
          "arrays",
          "math"
        ],
        "description": "Solve Tries Problem 304. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "arrays"
        ],
        "companies": []
      },
      {
        "id": "p083",
        "name": "Tries Problem 83",
        "platform": "codeforces",
        "code": "CF304H",
        "link": "https://codeforces.com/problemset/problem/304/H",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 926,
        "striver": true,
        "tags": [
          "bit-manipulation",
          "binary-search",
          "math"
        ],
        "description": "Solve Tries Problem 83. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "bit-manipulation",
          "binary-search"
        ],
        "companies": [
          "amazon",
          "microsoft"
        ]
      },
      {
        "id": "p346",
        "name": "Tries Problem 346",
        "platform": "leetcode",
        "code": "LC346",
        "link": "https://leetcode.com/problems/tries-problem-346/",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 939,
        "striver": true,
        "tags": [
          "math"
        ],
        "description": "Solve Tries Problem 346. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "math"
        ],
        "companies": [
          "apple"
        ]
      },
      {
        "id": "p269",
        "name": "Tries Problem 269",
        "platform": "codeforces",
        "code": "CF828D",
        "link": "https://codeforces.com/problemset/problem/828/D",
        "topic": "tries",
        "difficulty": "easy",
        "rating": 985,
        "striver": true,
        "tags": [
          "strings",
          "bfs"
        ],
        "description": "Solve Tries Problem 269. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "strings",
          "bfs"
        ],
        "companies": [
          "amazon"
        ]
      },
      {
        "id": "p374",
        "name": "Tries Problem 374",
        "platform": "leetcode",
        "code": "LC374",
        "link": "https://leetcode.com/problems/tries-problem-374/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1202,
        "striver": true,
        "tags": [
          "math",
          "graphs",
          "queue"
        ],
        "description": "Solve Tries Problem 374. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "math",
          "graphs"
        ],
        "companies": [
          "netflix",
          "adobe"
        ]
      },
      {
        "id": "p715",
        "name": "Tries Problem 715",
        "platform": "leetcode",
        "code": "LC715",
        "link": "https://leetcode.com/problems/tries-problem-715/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1215,
        "striver": false,
        "tags": [
          "math",
          "queue"
        ],
        "description": "Solve Tries Problem 715. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "math",
          "queue"
        ],
        "companies": [
          "uber"
        ]
      },
      {
        "id": "p259",
        "name": "Tries Problem 259",
        "platform": "leetcode",
        "code": "LC259",
        "link": "https://leetcode.com/problems/tries-problem-259/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1249,
        "striver": true,
        "tags": [
          "two-pointers",
          "recursion"
        ],
        "description": "Solve Tries Problem 259. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "two-pointers",
          "recursion"
        ],
        "companies": [
          "microsoft"
        ]
      },
      {
        "id": "p403",
        "name": "Tries Problem 403",
        "platform": "codeforces",
        "code": "CF1290B",
        "link": "https://codeforces.com/problemset/problem/1290/B",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1260,
        "striver": true,
        "tags": [
          "heap",
          "greedy",
          "trees"
        ],
        "description": "Solve Tries Problem 403. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "greedy"
        ],
        "companies": [
          "uber",
          "google"
        ]
      },
      {
        "id": "p458",
        "name": "Tries Problem 458",
        "platform": "codeforces",
        "code": "CF1078A",
        "link": "https://codeforces.com/problemset/problem/1078/A",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1268,
        "striver": false,
        "tags": [
          "stack"
        ],
        "description": "Solve Tries Problem 458. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "stack"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p279",
        "name": "Tries Problem 279",
        "platform": "codeforces",
        "code": "CF511E",
        "link": "https://codeforces.com/problemset/problem/511/E",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1311,
        "striver": true,
        "tags": [
          "dfs"
        ],
        "description": "Solve Tries Problem 279. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "dfs"
        ],
        "companies": [
          "meta",
          "uber"
        ]
      },
      {
        "id": "p249",
        "name": "Tries Problem 249",
        "platform": "leetcode",
        "code": "LC249",
        "link": "https://leetcode.com/problems/tries-problem-249/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1344,
        "striver": true,
        "tags": [
          "binary-search",
          "strings",
          "dp"
        ],
        "description": "Solve Tries Problem 249. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "binary-search",
          "strings"
        ],
        "companies": []
      },
      {
        "id": "p053",
        "name": "Tries Problem 53",
        "platform": "codeforces",
        "code": "CF1867E",
        "link": "https://codeforces.com/problemset/problem/1867/E",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1346,
        "striver": true,
        "tags": [
          "heap",
          "trees"
        ],
        "description": "Solve Tries Problem 53. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "heap",
          "trees"
        ],
        "companies": [
          "adobe",
          "microsoft"
        ]
      },
      {
        "id": "p025",
        "name": "Tries Problem 25",
        "platform": "codeforces",
        "code": "CF1778C",
        "link": "https://codeforces.com/problemset/problem/1778/C",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1350,
        "striver": true,
        "tags": [
          "hashmap",
          "math"
        ],
        "description": "Solve Tries Problem 25. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "math"
        ],
        "companies": []
      },
      {
        "id": "p414",
        "name": "Tries Problem 414",
        "platform": "codeforces",
        "code": "CF1610H",
        "link": "https://codeforces.com/problemset/problem/1610/H",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1397,
        "striver": true,
        "tags": [
          "bfs",
          "recursion",
          "greedy"
        ],
        "description": "Solve Tries Problem 414. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "bfs",
          "recursion"
        ],
        "companies": [
          "amazon",
          "google"
        ]
      },
      {
        "id": "p191",
        "name": "Tries Problem 191",
        "platform": "codeforces",
        "code": "CF606H",
        "link": "https://codeforces.com/problemset/problem/606/H",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1405,
        "striver": true,
        "tags": [
          "queue"
        ],
        "description": "Solve Tries Problem 191. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "netflix"
        ]
      },
      {
        "id": "p467",
        "name": "Tries Problem 467",
        "platform": "leetcode",
        "code": "LC467",
        "link": "https://leetcode.com/problems/tries-problem-467/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1413,
        "striver": false,
        "tags": [
          "hashmap",
          "dp"
        ],
        "description": "Solve Tries Problem 467. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "dp"
        ],
        "companies": [
          "uber",
          "netflix"
        ]
      },
      {
        "id": "p627",
        "name": "Tries Problem 627",
        "platform": "codeforces",
        "code": "CF1870D",
        "link": "https://codeforces.com/problemset/problem/1870/D",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1416,
        "striver": false,
        "tags": [
          "graphs"
        ],
        "description": "Solve Tries Problem 627. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "graphs"
        ],
        "companies": [
          "uber",
          "amazon"
        ]
      },
      {
        "id": "p749",
        "name": "Tries Problem 749",
        "platform": "leetcode",
        "code": "LC749",
        "link": "https://leetcode.com/problems/tries-problem-749/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1467,
        "striver": false,
        "tags": [
          "dp",
          "hashmap",
          "graphs"
        ],
        "description": "Solve Tries Problem 749. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "dp",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p356",
        "name": "Tries Problem 356",
        "platform": "leetcode",
        "code": "LC356",
        "link": "https://leetcode.com/problems/tries-problem-356/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1494,
        "striver": true,
        "tags": [
          "recursion",
          "heap"
        ],
        "description": "Solve Tries Problem 356. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "recursion",
          "heap"
        ],
        "companies": []
      },
      {
        "id": "p328",
        "name": "Tries Problem 328",
        "platform": "codeforces",
        "code": "CF1491B",
        "link": "https://codeforces.com/problemset/problem/1491/B",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1564,
        "striver": true,
        "tags": [
          "hashmap",
          "graphs",
          "arrays"
        ],
        "description": "Solve Tries Problem 328. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "hashmap",
          "graphs"
        ],
        "companies": [
          "google",
          "microsoft"
        ]
      },
      {
        "id": "p728",
        "name": "Tries Problem 728",
        "platform": "leetcode",
        "code": "LC728",
        "link": "https://leetcode.com/problems/tries-problem-728/",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1615,
        "striver": false,
        "tags": [
          "queue"
        ],
        "description": "Solve Tries Problem 728. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "queue"
        ],
        "companies": [
          "meta"
        ]
      },
      {
        "id": "p503",
        "name": "Tries Problem 503",
        "platform": "codechef",
        "code": "CCPROB503",
        "link": "https://www.codechef.com/problems/CCPROB503",
        "topic": "tries",
        "difficulty": "medium",
        "rating": 1691,
        "striver": false,
        "tags": [
          "arrays",
          "hashmap",
          "two-pointers"
        ],
        "description": "Solve Tries Problem 503. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "arrays",
          "hashmap"
        ],
        "companies": [
          "microsoft",
          "meta"
        ]
      },
      {
        "id": "p055",
        "name": "Tries Problem 55",
        "platform": "leetcode",
        "code": "LC55",
        "link": "https://leetcode.com/problems/tries-problem-55/",
        "topic": "tries",
        "difficulty": "hard",
        "rating": 2037,
        "striver": true,
        "tags": [
          "queue",
          "two-pointers"
        ],
        "description": "Solve Tries Problem 55. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "two-pointers"
        ],
        "companies": [
          "google",
          "netflix"
        ]
      },
      {
        "id": "p320",
        "name": "Tries Problem 320",
        "platform": "leetcode",
        "code": "LC320",
        "link": "https://leetcode.com/problems/tries-problem-320/",
        "topic": "tries",
        "difficulty": "hard",
        "rating": 2043,
        "striver": true,
        "tags": [
          "dfs",
          "hashmap"
        ],
        "description": "Solve Tries Problem 320. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "dfs",
          "hashmap"
        ],
        "companies": []
      },
      {
        "id": "p042",
        "name": "Tries Problem 42",
        "platform": "leetcode",
        "code": "LC42",
        "link": "https://leetcode.com/problems/tries-problem-42/",
        "topic": "tries",
        "difficulty": "hard",
        "rating": 2047,
        "striver": true,
        "tags": [
          "math",
          "dfs"
        ],
        "description": "Solve Tries Problem 42. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "math",
          "dfs"
        ],
        "companies": [
          "netflix",
          "microsoft"
        ]
      },
      {
        "id": "p330",
        "name": "Tries Problem 330",
        "platform": "codechef",
        "code": "CCPROB330",
        "link": "https://www.codechef.com/problems/CCPROB330",
        "topic": "tries",
        "difficulty": "hard",
        "rating": 2219,
        "striver": true,
        "tags": [
          "math",
          "trees"
        ],
        "description": "Solve Tries Problem 330. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "math",
          "trees"
        ],
        "companies": [
          "google",
          "meta"
        ]
      },
      {
        "id": "p372",
        "name": "Tries Problem 372",
        "platform": "leetcode",
        "code": "LC372",
        "link": "https://leetcode.com/problems/tries-problem-372/",
        "topic": "tries",
        "difficulty": "hard",
        "rating": 2365,
        "striver": true,
        "tags": [
          "queue",
          "dfs"
        ],
        "description": "Solve Tries Problem 372. Apply core tries concepts to compute the required result.",
        "prerequisite": [
          "queue",
          "dfs"
        ],
        "companies": []
      }
    ]
  }
];
