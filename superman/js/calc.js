$( document ).ready(function() {

  var town = '3';
  var map = '0';
  var count = '0';

  var Array = {
    // Москва
    0: {
      // 20м2
      0: {
        // 2 р.места
        0: {
          invest: '1 023 900',
          profit3: '-40 085',
          profit6: '38 336',
          profit9: '76 084',
          profit12: '109 765',
          turn3: '152 439',
          turn6: '284 596',
          turn9: '355 819',
          turn12: '419 367'
        },
        // 3 р.места
        1: {
          invest: '1 073 900',
          profit3: '4 122',
          profit6: '113 753',
          profit9: '170 376',
          profit12: '220 897',
          turn3: '228 659',
          turn6: '426 893',
          turn9: '533 729',
          turn12: '629 051'
        },
        // 4 р.места
        2: {
          invest: '1 123 900',
          profit3: '90 856',
          profit6: '189 171',
          profit9: '264 668',
          profit12: '332 029',
          turn3: '304 878',
          turn6: '569 191',
          turn9: '711 638',
          turn12: '838 735'
        },
        // 5 р.места
        3: {
          invest: '1 173 900',
          profit3: '92 537',
          profit6: '264 589',
          profit9: '358 960',
          profit12: '443 162',
          turn3: '381 098',
          turn6: '711 489',
          turn9: '889 548',
          turn12: '1 048 418'
        }
      },
      // 30м2
      1: {
        // 2 р.места
        0: {
          invest: '1 033 900',
          profit3: '-50 085',
          profit6: '28 336',
          profit9: '66 084',
          profit12: '99 765'
        },
        // 3 р.места
        1: {
          invest: '1 083 900',
          profit3: '-5 878',
          profit6: '103 753',
          profit9: '160 376',
          profit12: '210 897'
        },
        // 4 р.места
        2: {
          invest: '1 133 900',
          profit3: '80 856',
          profit6: '179 171',
          profit9: '254 668',
          profit12: '322 029'
        },
        // 5 р.места
        3: {
          invest: '1 183 900',
          profit3: '82 537',
          profit6: '254 589',
          profit9: '348 960',
          profit12: '433 162'
        }
      },
      // 40м2
      2: {
        // 2 р.места
        0: {
          invest: '1 043 900',
          profit3: '-60 085',
          profit6: '18 336',
          profit9: '56 084',
          profit12: '89 765'
        },
        // 3 р.места
        1: {
          invest: '1 093 900',
          profit3: '-15 878',
          profit6: '93 753',
          profit9: '150 376',
          profit12: '200 897'
        },
        // 4 р.места
        2: {
          invest: '1 143 900',
          profit3: '70 856',
          profit6: '169 171',
          profit9: '244 668',
          profit12: '312 029'
        },
        // 5 р.места
        3: {
          invest: '1 193 900',
          profit3: '72 537',
          profit6: '244 589',
          profit9: '338 960',
          profit12: '423 162'
        }
      }
    },
    // Питер
    1: {
      // 20м2
      0: {
        // 2 р.места
        0: {
          invest: '970 300',
          profit3: '10 737',
          profit6: '95 765',
          profit9: '137 075',
          profit12: '173 933',
          turn3: '152 439',
          turn6: '284 596',
          turn9: '284 596',
          turn12: '419 367'
        },
        // 3 р.места
        1: {
          invest: '1 020 300',
          profit3: '58 755',
          profit6: '178 298',
          profit9: '240 263',
          profit12: '295 550',
          turn3: '228 659',
          turn6: '426 893',
          turn9: '533 729',
          turn12: '629 051'
        },
        // 4 р.места
        2: {
          invest: '1 070 300',
          profit3: '106 773',
          profit6: '260 831',
          profit9: '343 450',
          profit12: '417 166',
          turn3: '304 878',
          turn6: '569 191',
          turn9: '711 638',
          turn12: '838 735'
        },
        // 5 р.места
        3: {
          invest: '1 120 300',
          profit3: '154 791',
          profit6: '353 363',
          profit9: '446 638',
          profit12: '538 783',
          turn3: '381 098',
          turn6: '711 489',
          turn9: '889 548',
          turn12: '1 048 418'
        }
      },
      // 30м2
      1: {
        // 2 р.места
        0: {
          invest: '980 300',
          profit3: '20 737',
          profit6: '105 765',
          profit9: '147 075',
          profit12: '183 933'
        },
        // 3 р.места
        1: {
          invest: '1 030 300',
          profit3: '68 755',
          profit6: '188 298',
          profit9: '250 263',
          profit12: '305 550'
        },
        // 4 р.места
        2: {
          invest: '1 080 300',
          profit3: '116 773',
          profit6: '270 831',
          profit9: '353 450',
          profit12: '427 166'
        },
        // 5 р.места
        3: {
          invest: '1 130 300',
          profit3: '164 791',
          profit6: '363 363',
          profit9: '456 638',
          profit12: '548 783'
        }
      },
      // 40м2
      2: {
        // 2 р.места
        0: {
          invest: '990 300',
          profit3: '20 737',
          profit6: '105 765',
          profit9: '147 075',
          profit12: '183 933'
        },
        // 3 р.места
        1: {
          invest: '1 040 300',
          profit3: '68 755',
          profit6: '188 298',
          profit9: '250 263',
          profit12: '305 550'
        },
        // 4 р.места
        2: {
          invest: '1 090 300',
          profit3: '116 773',
          profit6: '270 831',
          profit9: '353 450',
          profit12: '427 166'
        },
        // 5 р.места
        3: {
          invest: '1 140 300',
          profit3: '164 791',
          profit6: '363 363',
          profit9: '456 638',
          profit12: '548 783'
        }
      }
    },
    // более 1 млн
    2: {
      // 20м2
      0: {
        // 2 р.места
        0: {
          invest: '882 800',
          profit3: '-17 731',
          profit6: '39 049',
          profit9: '68 482',
          profit12: '84 149',
          turn3: '82 350',
          turn6: '235 808',
          turn9: '315 230',
          turn12: '357 802'
        },
        // 3 р.места
        1: {
          invest: '932 800',
          profit3: '23 444',
          profit6: '156 953',
          profit9: '226 097',
          profit12: '263 049',
          turn3: '123 525',
          turn6: '353 712',
          turn9: '472 845',
          turn12: '536 702'
        },
        // 4 р.места
        2: {
          invest: '982 800',
          profit3: '64 619',
          profit6: '274 856',
          profit9: '383 711',
          profit12: '441 950',
          turn3: '164 700',
          turn6: '471 615',
          turn9: '630 459',
          turn12: '715 603'
        },
        // 5 р.места
        3: {
          invest: '1 032 800',
          profit3: '105 794',
          profit6: '392 760',
          profit9: '541 326',
          profit12: '620 851',
          turn3: '205 875',
          turn6: '589 519',
          turn9: '788 074',
          turn12: '894 504'
        }
      },
      // 30м2
      1: {
        // 2 р.места
        0: {
          invest: '892 800',
          profit3: '-7 731',
          profit6: '49 049',
          profit9: '78 482',
          profit12: '94 149'
        },
        // 3 р.места
        1: {
          invest: '942 800',
          profit3: '33 444',
          profit6: '166 953',
          profit9: '236 097',
          profit12: '273 049'
        },
        // 4 р.места
        2: {
          invest: '992 800',
          profit3: '74 619',
          profit6: '284 856',
          profit9: '393 711',
          profit12: '451 950'
        },
        // 5 р.места
        3: {
          invest: '1 042 800',
          profit3: '115 794',
          profit6: '402 760',
          profit9: '551 326',
          profit12: '630 851'
        }
      },
      // 40м2
      2: {
        // 2 р.места
        0: {
          invest: '902 800',
          profit3: '-7 731',
          profit6: '49 049',
          profit9: '78 482',
          profit12: '94 149'
        },
        // 3 р.места
        1: {
          invest: '952 800',
          profit3: '33 444',
          profit6: '166 953',
          profit9: '236 097',
          profit12: '273 049'
        },
        // 4 р.места
        2: {
          invest: '1 002 800',
          profit3: '74 619',
          profit6: '284 856',
          profit9: '393 711',
          profit12: '451 950'
        },
        // 5 р.места
        3: {
          invest: '1 052 800',
          profit3: '115 794',
          profit6: '402 760',
          profit9: '551 326',
          profit12: '630 851'
        }
      }
    },
    // менее 1 млн
    3: {
      // 20м2
      0: {
        // 2 р.места
        0: {
          invest: '821 700',
          profit3: '41 073',
          profit6: '64 102',
          profit9: '126 017',
          profit12: '150 571',
          turn3: '137 195',
          turn6: '176 900',
          turn9: '283 650',
          turn12: '325 984'
        },
        // 3 р.места
        1: {
          invest: '871 700',
          profit3: '80 860',
          profit6: '115 403',
          profit9: '208 276',
          profit12: '245 106',
          turn3: '205 793',
          turn6: '265 350',
          turn9: '425 475',
          turn12: '488 976'
        },
        // 4 р.места
        2: {
          invest: '921 700',
          profit3: '120 646',
          profit6: '166 704',
          profit9: '290 534',
          profit12: '339 641',
          turn3: '274 390',
          turn6: '353 800',
          turn9: '567 300',
          turn12: '651 968'
        },
        // 5 р.места
        3: {
          invest: '971 700',
          profit3: '160 433',
          profit6: '218 005',
          profit9: '372 793',
          profit12: '434 177',
          turn3: '342 988',
          turn6: '442 250',
          turn9: '709 125',
          turn12: '814 960'
        }
      },
      // 30м2
      1: {
        // 2 р.места
        0: {
          invest: '823 700',
          profit3: '39 073',
          profit6: '62 102',
          profit9: '124 017',
          profit12: '148 571'
        },
        // 3 р.места
        1: {
          invest: '873 700',
          profit3: '78 860',
          profit6: '113 403',
          profit9: '206 276',
          profit12: '243 106'
        },
        // 4 р.места
        2: {
          invest: '923 700',
          profit3: '118 646',
          profit6: '164 704',
          profit9: '288 534',
          profit12: '337 641'
        },
        // 5 р.места
        3: {
          invest: '973 700',
          profit3: '158 433',
          profit6: '216 005',
          profit9: '370 793',
          profit12: '432 177'
        }
      },
      // 40м2
      2: {
        // 2 р.места
        0: {
          invest: '828 700',
          profit3: '34 073',
          profit6: '57 102',
          profit9: '119 017',
          profit12: '143 571'
        },
        // 3 р.места
        1: {
          invest: '878 700',
          profit3: '73 860',
          profit6: '108 403',
          profit9: '201 276',
          profit12: '238 106'
        },
        // 4 р.места
        2: {
          invest: '928 700',
          profit3: '113 646',
          profit6: '159 704',
          profit9: '283 534',
          profit12: '332 641'
        },
        // 5 р.места
        3: {
          invest: '978 700',
          profit3: '153 433',
          profit6: '211 005',
          profit9: '365 793',
          profit12: '427 177'
        }
      }
    }
  };

  function reloadTable() {

    for (var t in Array) {
      if (town == t) {
        for (var m in Array[t]) {
          if (map == m){
            for (var c in Array[t][m]) {
              if (count == c) {
                $('#invest').html(Array[t][m][c]['invest']);
                $('#investMob').html(Array[t][m][c]['invest']);
                $('#profit-3').html(Array[t][m][c]['profit3']);
                $('#profit-6').html(Array[t][m][c]['profit6']);
                $('#profit-9').html(Array[t][m][c]['profit9']);
                $('#profit-12').html(Array[t][m][c]['profit12']);
                $('#turn-3').html(Array[t][0][c]['turn3']);
                $('#turn-6').html(Array[t][0][c]['turn6']);
                $('#turn-9').html(Array[t][0][c]['turn9']);
                $('#turn-12').html(Array[t][0][c]['turn12']);
              }
            }
          }
        }
      }
    }
  }

  $('.clickTown').on('click', function(el) {
    el.preventDefault();
    name = $(this).html();
    $('.disabled').removeClass();
    $(this).parent().addClass('disabled');
    $('#dropdownMenu1').html(name);
    town = $(this).attr('data')+'';
    $('.clickTown.bold').removeClass('bold');
    $(this).addClass('bold');
    reloadTable();
  });

  $('.clickMap').on('click', function(){
    map = $(this).attr('data');
    $('.activeMap').removeClass('activeMap');
    $(this).addClass('activeMap');
    reloadTable();
  });

  $('.clickCount').on('click', function(){
    count = $(this).attr('data');
    $('.activeCount').removeClass('activeCount');
    $(this).addClass('activeCount');
    reloadTable();
  });

});
