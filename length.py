# give amount of lines in out.txt

def main():
    with open('length.txt') as f:
        print(len(f.readlines()))

if __name__ == '__main__':
    main()