function gradingSystem (score) {
    if (score >= 97 && score <= 100){
      return ("Your Grade is A+");
    }
    else if (score >= 93 && score <= 96) {
      return ("Your Grade is A");
    }
    else if (score >= 90 && score <= 92){
      return ("Your Grade is A-");
    }
    else if (score >= 87 && score <= 89){
      return "Your Grade is B+";
    }
    else if (score >= 83 && score <= 86){
      return "Your Grade is B";
    }
    else if (score >= 80 && score <= 82){
      return "Your Grade is B-";
    }
    else if (score >= 77 && score <= 79){
      return "Your Grade is C+";
    }
    else if (score >= 73 && score <= 76){
      return "Your Grade is C";
    }
    else if (score >= 70 && score <= 72){
      return "Your Grade is C-";
    }
    else if (score >= 67 && score <= 69){
      return "Your Grade is D+";
    }
    else if (score >= 63 && score <= 66){
      return "Your Grade is D";
    }
    else if (score >= 60 && score <= 62){
      return "Your Grade is B-";
    }
    else if (score <= 59){
      return "Your Grade is F. Do better.";
    }
    return score;
  }

  