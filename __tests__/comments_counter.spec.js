import countComments from '../src/modules/count_comments.js';

describe('Comment counter tests', () => {
  test('Counting comments from a small array', () => {
    const comments = [
      { 
        comment: 'Another comment.',
        username: 'Cesar',
        creation_date: '2022-06-22'
      },
      { 
        comment: 'Testing counter.',
        username: 'Raúl',
        creation_date: '2022-06-20'
      },
      { 
        comment: 'An extra comment.',
        username: 'Domingo',
        creation_date: '2022-06-18'
      },
      { 
        comment: 'This is my comment.',
        username: 'Emilia',
        creation_date: '2022-06-05'
      },
      { 
        comment: 'I love this comment.',
        username: 'Sofía',
        creation_date: '2022-05-19'
      },
    ];    
    
    expect(countComments(comments)).toEqual(5);
  });
  test('Counting comments from a larger array', () => {
    const comments = [
      { 
        comment: 'Another comment.',
        username: 'Cesar',
        creation_date: '2022-06-22'
      },
      { 
        comment: 'Testing counter.',
        username: 'Raúl',
        creation_date: '2022-06-20'
      },
      { 
        comment: 'An extra comment.',
        username: 'Domingo',
        creation_date: '2022-06-18'
      },
      { 
        comment: 'This is my comment.',
        username: 'Emilia',
        creation_date: '2022-06-05'
      },
      { 
        comment: 'I love this comment.',
        username: 'Sofía',
        creation_date: '2022-05-19'
      },
      { 
        comment: 'Another comment.',
        username: 'Cesar',
        creation_date: '2022-06-22'
      },
      { 
        comment: 'Testing counter.',
        username: 'Raúl',
        creation_date: '2022-06-20'
      },
      { 
        comment: 'An extra comment.',
        username: 'Domingo',
        creation_date: '2022-06-18'
      },
      { 
        comment: 'This is my comment.',
        username: 'Emilia',
        creation_date: '2022-06-05'
      },
      { 
        comment: 'I love this comment.',
        username: 'Sofía',
        creation_date: '2022-05-19'
      },
      { 
        comment: 'Another comment.',
        username: 'Cesar',
        creation_date: '2022-06-22'
      },
      { 
        comment: 'Testing counter.',
        username: 'Raúl',
        creation_date: '2022-06-20'
      },
      { 
        comment: 'An extra comment.',
        username: 'Domingo',
        creation_date: '2022-06-18'
      },
      { 
        comment: 'This is my comment.',
        username: 'Emilia',
        creation_date: '2022-06-05'
      },
      { 
        comment: 'I love this comment.',
        username: 'Sofía',
        creation_date: '2022-05-19'
      },
      { 
        comment: 'Another comment.',
        username: 'Cesar',
        creation_date: '2022-06-22'
      },
      { 
        comment: 'Testing counter.',
        username: 'Raúl',
        creation_date: '2022-06-20'
      },
      { 
        comment: 'An extra comment.',
        username: 'Domingo',
        creation_date: '2022-06-18'
      },
      { 
        comment: 'This is my comment.',
        username: 'Emilia',
        creation_date: '2022-06-05'
      },
      { 
        comment: 'I love this comment.',
        username: 'Sofía',
        creation_date: '2022-05-19'
      },
      { 
        comment: 'Another comment.',
        username: 'Cesar',
        creation_date: '2022-06-22'
      },
      { 
        comment: 'Testing counter.',
        username: 'Raúl',
        creation_date: '2022-06-20'
      },
      { 
        comment: 'An extra comment.',
        username: 'Domingo',
        creation_date: '2022-06-18'
      },
    ];    
    
    expect(countComments(comments)).toEqual(23);
  });
  test('Counting comments from an empty array', () => {
    const comments = [];    
    
    expect(countComments(comments)).toEqual(0);
  });
});